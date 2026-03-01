// All styles for MainApp.jsx and its components.
// Edit these to change the look of the main map/search view.

export const appStyles = {
  root: { display: "flex", flexDirection: "column", height: "100vh", background: "#0a0a0f", color: "#eeeeee", fontFamily: "'Syne', sans-serif" },
  header: { padding: "1rem 1.5rem 0.5rem", borderBottom: "1px solid #222", background: "#0a0a0f" },
  headerInner: { display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.75rem" },
  title: { margin: 0, color: "#eff1ed", fontSize: "3rem", fontWeight: 500, letterSpacing: "0.03em", fontFamily: "'Cormorant Garamond', serif", whiteSpace: "nowrap" },
  subtitle: { margin: "0.1rem 0 0", fontSize: "0.85rem", color: "#555" },
  titleRibbon: { paddingLeft: ".75rem", display: "flex", alignItems: "center", gap: "0.75rem" },
  titleBar: { width: "6px", alignSelf: "stretch", background: "#bcbd8b", borderRadius: "4px", boxShadow: "0 0 30px rgba(188, 189, 139, 0.8), 0 0 30px rgba(188, 189, 139, 0.4)" },  // Grade badge (top right of header)
  gradeBadge: { marginLeft: "auto", borderRadius: "12px", padding: "2rem 3rem", textAlign: "center", minWidth: 90, display: "flex", flexDirection: "column" },
  gradeLabel: { fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.6)" },
  gradeValue: { fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1 },
  gradeNum: { fontSize: "1rem", color: "rgba(255,255,255,0.7)" },

  // Search bar
  searchRow: { display: "flex", gap: "0.5rem", marginBottom: "0.15rem", flex: 1, minWidth: 0 },
  input: { flex: 1, background: "#1a1a2a", border: "3px solid #717744", borderRadius: "8px", padding: "0.75rem 1rem", color: "#eeeeee", fontSize: "2rem", outline: "none", boxSizing: "border-box" },
  searchBtn: { background: "#717744", border: "none", borderRadius: "8px", padding: "0.75rem 1.4rem", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "1rem", whiteSpace: "nowrap" },

  // Category filter chips
  filters: { display: "flex", gap: "0.4rem", flexWrap: "wrap", paddingBottom: "0.75rem" },
  filterChip: { border: "1px solid", borderRadius: "20px", padding: "0.25rem 0.7rem", fontSize: "0.75rem", cursor: "pointer", transition: "all 0.2s", fontFamily: "'Syne', sans-serif" },

  // Layout
  body: { display: "flex", flex: 1, overflow: "hidden" },
  sidebar: { width: 400, background: "#0d0d14", borderRight: "none", overflowY: "auto", display: "flex", flexDirection: "column", boxShadow: "inset -10px 0 20px 0 rgba(188, 189, 139, 0.35)" },  scoreCard: { padding: "1rem", borderBottom: "1px solid #222" },
  sidebarTitle: { margin: "0 0 0.75rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#bcbd8b" },
  scoreRow: { display: "flex", justifyContent: "space-between", fontSize: "0.85rem", padding: "0.3rem 0", borderBottom: "1px solid #1a1a2a", color: "#eeeeee" },
  missingBox: { marginTop: "0.75rem", padding: "0.6rem", background: "#1a1a2a", borderRadius: "8px" },
  missingTitle: { margin: "0 0 0.4rem", fontSize: "0.75rem", color: "#bcbd8b" },
  missingTag: { display: "inline-block", background: "#0a0a0f", borderRadius: "4px", padding: "0.15rem 0.4rem", fontSize: "0.7rem", marginRight: "0.3rem", marginBottom: "0.3rem", color: "#eeeeee", border: "1px solid #333" },

  // Place list (sidebar bottom)
  placeList: { flex: 1, padding: "0.5rem" },
  placeCard: { display: "flex", gap: "0.7rem", alignItems: "center", padding: "0.6rem 0.7rem", borderRadius: "8px", marginBottom: "0.4rem", cursor: "pointer", transition: "background 0.2s" },
  placeName: { margin: 0, fontSize: "0.85rem", fontWeight: 600, color: "#eff1ed" },
  placeType: { margin: 0, fontSize: "0.72rem", color: "#555" },

  // Map area
  mapContainer: { flex: 1, position: "relative", background: "#0a0a0f", overflow: "visible" },  
 map: { width: "100%", height: "100%", background: "#0a0a0f" },
  mapTooltip: { position: "absolute", top: 16, right: 16, background: "#0d0d14", border: "1px solid #333", borderRadius: "10px", padding: "0.6rem 0.9rem", zIndex: 10, pointerEvents: "none" },

  // Popup on map click
  placePopup: { position: "absolute", bottom: 24, left: 24, background: "#0d0d14", border: "1px solid #333", borderRadius: "12px", padding: "2rem 1.5rem", minWidth: 220, zIndex: 10 },
  closeBtn: { position: "absolute", top: 8, right: 10, background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: "1rem" },
  popupName: { margin: "0 0 0.2rem", fontWeight: 700, fontSize: "1rem", color: "#eff1ed" },
  popupMeta: { margin: "0 0 0.2rem", fontSize: "0.8rem", color: "#bcbd8b" },
  popupAddr: { margin: 0, fontSize: "0.78rem", color: "#555" },

  // AI summary box
  aiBox: { padding: "1rem", borderBottom: "1px solid #222" },
  aiHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" },
  aiTitle: { fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#bcbd8b", fontWeight: 700 },
  aiRefresh: { background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: "1rem", padding: "0 0.2rem", lineHeight: 1 },
  aiText: { margin: 0, fontSize: "0.82rem", lineHeight: 1.7, color: "#eeeeee" },
  aiLoading: { display: "flex", gap: "0.3rem", alignItems: "center", padding: "0.5rem 0" },
  aiDot: { display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#bcbd8b" },
};