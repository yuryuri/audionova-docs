# Developer Notes: How AudioNova Uses AI for Mixing

This page is intended for technical collaborators, contributors, or curious users who want to understand how AudioNova works behind the scenes.

---

## ⚙️ How the Mixing Works

At a high level, AudioNova’s architecture looks like this:

User Prompt → ChatGPT (LLM) → Internal Command Generation → DSP Engine → Audio Output


---

## 🧠 Language Model (LLM)

AudioNova uses **ChatGPT or a similar LLM** to interpret natural language prompts. It doesn't hardcode audio instructions — it interprets them dynamically.

- Prompts are parsed for:
  - Effects (reverb, compression, EQ)
  - Parameters (e.g. "50% wet", "tight low end")
  - Descriptors (e.g. "gritty", "warm", "club-ready")

- We rely on prompt patterns rather than rigid keyword parsing

- All prompt interpretation is **context-aware** and **generative**, not rule-based

---

## 🎛 Audio Processing Engine

Once the AI interprets a prompt, the system generates intermediate instructions like:

```json
{
  "effect": "reverb",
  "target": "vocals",
  "amount": 0.25,
  "style": "plate",
  "preDelay": 10
}


These instructions are passed to a DSP backend — either custom code, a plugin chain, or a render pipeline — depending on the implementation.

💬 Prompt Grammar Evolution:

  We’re continuously training prompt formats that are:

    - Musician-friendly

    - Conversational

    - Modular (e.g., chaining effects)

  We're designing a prompt grammar that feels like texting your dream engineer — not learning a new syntax.

    - Future iterations may use:

    - Structured prompt tagging

    - Reference-based intent matching

    - Few-shot examples per prompt style


🤝 Contributing:
  
  Interested in helping improve prompt interpretation, grammar design, or backend DSP logic?

  Join the dev team or open an issue. This is mixing by language — and we’re just getting started.