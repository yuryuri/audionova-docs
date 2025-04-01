# Understanding How the AI Works

AudioNova uses a large language model (LLM) — the same kind of AI that powers tools like ChatGPT — to interpret your mixing prompts.

Unlike traditional audio plugins, it doesn’t use fixed knobs or settings. Instead, it “understands” what you’re saying and decides what to do based on context.

---

## 🧠 How the Language Model Interprets Prompts

When you send a prompt like:

> `Add reverb to the vocals, but keep them intimate and close`

Here’s what’s happening under the hood:

1. **The model reads your text**
2. It parses your **intent** — not just keywords, but tone and phrasing
3. It converts that into a **high-level audio command**
4. That command is translated to backend DSP or routing logic (via code)

---

## 💬 What the AI is Good At

- **Understanding adjectives**  
  → `warm`, `punchy`, `dreamy`, `gritty`, `clean`

- **Understanding musical context**  
  → `club-ready`, `bedroom pop`, `film score energy`

- **Sequencing logic**  
  → `compress → EQ → delay`

- **Handling nuanced comparisons**  
  → `Make the mix feel like Bon Iver but with EDM drums`

---

## 🧩 What the AI Might Struggle With

- **Contradictions**  
  → `Make the vocals dry and reverberant`  
    → too ambiguous, clarify your intent

- **Overloaded prompts**  
  → `Make the snare louder, dry, wide, slower, then echo and more vintage but still tight`  
    → break it into steps

- **Uncommon slang**  
  → Use industry-standard terms when possible

- **Literal vs abstract**  
  → `Make it blue and sleepy` might work... or not. Add audio-specific phrasing.

---

## 🧪 Model Behavior: Things to Know

- Prompts **are stateless within each message** — but sessions retain some context
- Prompts are interpreted by **patterns**, not by rules — it’s learning from language, not knobs
- Parentheses `()` may emphasize or group weight
- Brackets `[]` can add context or references

---

## 🧠 Prompting Principles (Recap)

| Principle | Description |
|----------|-------------|
| Clarity over cleverness | Be specific about the result you want |
| Break up instructions | Step-by-step is better than all at once |
| Use references | Artists, genres, gear, or FX plugins |
| Think like a producer | Describe intention, not settings |

---

## 🔬 Example: Prompt Deconstructed

> `Make the vocals smoother, a bit warmer, with subtle reverb and compression`

The AI will likely interpret this as:
- Smoothing = compression + de-essing
- Warmth = EQ boost at 200–600Hz
- Subtle reverb = low mix level, short tail
- Compression = medium ratio, soft attack

---

AudioNova is powered by language — and the more clearly you speak to it, the more it becomes your mix engineer. 🎚🧠
