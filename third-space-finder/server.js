require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const OpenAI = require("openai");

const app = express();

console.log("Loaded key:", process.env.OPENROUTER_API_KEY ? "YES" : "NO");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});

app.use("/api/", limiter);

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided" });
    }
    //liquid/lfm-2.5-1.2b-thinking:free"
    const completion = await client.chat.completions.create({
      model: "openrouter/free", // free tier model
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0].message.content;
    console.log("Model used:", completion.model);
    console.log("Response text:", text);
    console.log("Full response:", JSON.stringify(completion, null, 2));

    res.json({ text });

  } catch (err) {
    console.error("OpenRouter error:", err);
    res.status(500).json({
      error: err.message || "AI request failed",
    });
  }
});

app.listen(3001, () => {
  console.log("Proxy server running on port 3001");
});