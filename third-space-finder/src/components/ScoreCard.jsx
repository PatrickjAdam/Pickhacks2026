import { useState, useEffect, useRef } from "react";
import { GRADE_COLORS } from "../constants";
import { appStyles as s } from "../styles/app";

// ─────────────────────────────────────────────────────────────
// GradeBadge — shown in the header top right
// ─────────────────────────────────────────────────────────────
export function GradeBadge({ scoreData }) {
  if (!scoreData) return null;

  return (
    <div
      style={{
        ...s.gradeBadge,
        background: GRADE_COLORS[scoreData.grade],
      }}
    >
      <span style={s.gradeLabel}>Social Score</span>
      <span style={s.gradeValue}>{scoreData.grade}</span>
      <span style={s.gradeNum}>{scoreData.score}/100</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ScoreCard — sidebar breakdown + AI summary
// ─────────────────────────────────────────────────────────────
export function ScoreCard({ scoreData, places, searchInput }) {
  const [aiSummary, setAiSummary] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const isGenerating = useRef(false);

  // Auto-trigger summary when scoreData changes
  useEffect(() => {
    if (!scoreData || !places?.length) return;

    generateSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scoreData]);

  if (!scoreData) return null;

  const { total, diversity, avgRating, missing } = scoreData.breakdown;

  const generateSummary = async () => {
    if (isGenerating.current) return;

    isGenerating.current = true;
    setAiLoading(true);
    setAiSummary("");

    try {
      const placeNames = places
        .slice(0, 15)
        .map((p) => {
          const rating = p.rating ? `, ⭐${p.rating}` : "";
          const price =
            p.price_level !== undefined
              ? `, ${"$".repeat(p.price_level) || "free"}`
              : "";
          return `${p.name} (${p.category}${rating}${price})`;
        })
        .join(", ");

      const prompt = `You are an urban planning expert analyzing the social infrastructure of a neighborhood.
      YOUR BIGGEST PRIORITY SHOULD BE KEEPING IT UNDER 150 WORDS

Neighborhood: ${searchInput}
Social Score: ${scoreData.grade} (${scoreData.score}/100)
Total third spaces found: ${total}
Type diversity: ${diversity}%
Average rating: ${avgRating}
Missing categories: ${missing?.length ? missing.join(", ") : "none"}
Places found: ${placeNames}

Write a concise 3-paragraph analysis:
1. A 1-2 sentence "personality" of this neighborhood
2. What's missing and why it matters
3. Pick the top 2-3 most interesting places and explain why they stand out

Under 150 words. No bullet points.`;

      const response = await fetch("http://localhost:3001/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      // 🔥 Proper error handling
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend error:", errorText);
        throw new Error("Server returned error");
      }

      const data = await response.json();

      if (!data?.text) {
        console.warn("No text returned from backend:", data);
        setAiSummary("AI returned an empty response.");
      } else {
        setAiSummary(data.text);
      }
    } catch (err) {
      console.error("Summary generation failed:", err);
      setAiSummary("Could not load AI summary.");
    } finally {
      setAiLoading(false);
      isGenerating.current = false;
    }
  };

  return (
    <>
      {/* ── Score breakdown ── */}
      <div style={s.scoreCard}>
        <h3 style={s.sidebarTitle}>Neighborhood Report</h3>

        <div style={s.scoreRow}>
          <span>Total third places</span>
          <strong>{total}</strong>
        </div>

        <div style={s.scoreRow}>
          <span>Type diversity</span>
          <strong>{diversity}%</strong>
        </div>

        <div style={s.scoreRow}>
          <span>Avg rating</span>
          <strong>⭐ {avgRating}</strong>
        </div>

        {missing?.length > 0 && (
          <div style={s.missingBox}>
            <p style={s.missingTitle}>⚠️ What's missing</p>
            {missing.map((m) => (
              <span key={m} style={s.missingTag}>
                {m}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── AI Summary ── */}
      <div style={s.aiBox}>
        <div style={s.aiHeader}>
          <span style={s.aiTitle}>✦ AI Analysis</span>

          {!aiLoading && aiSummary && (
            <button style={s.aiRefresh} onClick={generateSummary}>
              ↻
            </button>
          )}
        </div>

        {aiLoading && (
            <>
            <style>{`
            @keyframes pulse {
                0%, 100% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            .ai-dot {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #fff;
                margin: 0 3px;
                animation: pulse 1.2s ease-in-out infinite;
            }
            .ai-dot:nth-child(2) { animation-delay: 0.2s; }
            .ai-dot:nth-child(3) { animation-delay: 0.4s; }
            `}</style>
            <div style={s.aiLoading}>
            <span className="ai-dot" />
            <span className="ai-dot" />
            <span className="ai-dot" />
            </div>
        </>
        )}

        {!aiLoading && aiSummary && (
          <p style={s.aiText}>{aiSummary}</p>
        )}

        {!aiLoading && !aiSummary && (
          <p style={s.aiText}>No analysis yet.</p>
        )}
      </div>
    </>
  );
}