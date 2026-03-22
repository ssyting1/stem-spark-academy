# 🤖 STEM Spark Academy

> *A father-daughter project that started as a vacation activity and grew into something we are really proud of.*

---

## The Story Behind This

This project started simply — my daughter had a school vacation coming up and I wanted to find something meaningful for us to do together. Instead of just watching videos, I thought: what if we *built* something she could actually learn from?

So we sat down together and I started suggesting ideas — topics to cover, types of games that could make learning fun, what kinds of robot characters we could have. She would listen, react, and then make it her own: "I want the robots to look cuter," "can we add a girl robot?", "that colour is too dark," "can it play a sound when I get it right?" I came up with the direction. She shaped how it felt.

What began as a few lessons about AI basics grew — slowly, lesson by lesson, feature by feature — into a full learning platform with 146 lessons across 4 tiers, 13 different game types, AI-powered chat, voice narration, certificates, and more.

Every update came from real feedback. When she said "this is boring," we added story scenes. When she said "the robot sounds weird," we reworked the voice. When she got excited finishing a lesson, we added confetti. This is a living project built by two people who are learning together — one learning STEM, one learning that the best way to teach is to build alongside.

It is also her first real introduction to **vibe coding** — the idea that you can describe what you want in plain English and AI will help you build it. She has watched this app come to life through conversation, iteration, and a lot of "let's try that and see."

---

## What It Is

**STEM Spark Academy** is a mobile-first, browser-based learning app for kids aged 8–17 covering AI, coding, STEM, and creative technology. It runs entirely as a single HTML file with no installation required — just open it in any browser.

The app is powered by Claude AI (Anthropic) for the interactive chat tutor, and uses the Web Speech API for voice narration. Everything else is pure vanilla JavaScript with React loaded from CDN.

**Live site:** [stemsparky.netlify.app](https://stemsparky.netlify.app)

---

## Features

### 📚 Curriculum — 146 Lessons across 4 Tiers + 2 Bonus Tracks

| Tier | Age | Modules | Topics |
|------|-----|---------|--------|
| 🟢 **Explorer** (Free) | 8–10 | 8 modules · 32 lessons | AI basics, algorithms, logic, data, the internet |
| 🟠 **Builder** (Pro) | 10–12 | 8 modules · 32 lessons | Python, web development, databases, APIs |
| 🎨 **Creator** (Pro) | 12–14 | 8 modules · 32 lessons | JavaScript, React, data science, cybersecurity |
| 🚀 **Innovator** (Pro) | 14–17 | 8 modules · 32 lessons | TypeScript, machine learning, AI engineering, deployment |

**Bonus Tracks:**
- 🎨 **Creative Coding** — generative art, p5.js, particle systems, audio visualisers
- 🤖 **AI/ML Deep Dive** — neural networks, NLP, computer vision, MLOps

### 🎮 13 Game Types
Every lesson includes an interactive mini-game:

| Game | Description |
|------|-------------|
| Sort | Drag items into correct categories |
| Pick | Multiple choice with instant feedback |
| Label | Tap the correct label for each emoji |
| Sequence | Tap steps in the right order |
| Build | Construct answers by picking from columns |
| Logic | Evaluate TRUE / FALSE statements |
| Grid | Tap coordinates on a 5×5 grid |
| Tag | Identify correct HTML / code tags |
| Python | Live Python editor via Skulpt |
| JavaScript | Live JS editor with in-browser runner |
| **Memory** | Flip-card emoji matching pairs |
| **Story** | Choose-your-adventure branching narrative |
| **Scramble** | Unscramble vocabulary words with hints |

### 🤖 AI Tutor — Sparky
- Powered by **Claude AI** (claude-sonnet model)
- Answers questions about the current lesson
- Pre-loaded suggestion chips so kids know what to ask
- Keeps conversation context across messages
- Reads responses aloud using Web Speech API

### 🎙️ Voice Narration
- Sparky reads every lesson intro, slide, and celebration message aloud
- Choose between **Girl** or **Boy** cyborg voice
- Pitch and rate tuned for a fun, energetic feel
- Mobile-compatible with gesture-unlock for iOS / Android

### 🎨 Customisation
- 10 bot characters to choose from (5 male, 5 female)
- 8 colour themes
- Rename your AI buddy
- Filter bots by gender

### 🏆 Gamification
- ⭐ Star ratings per lesson (1–3 stars)
- 🏅 Module completion badges
- 🏆 Leaderboard
- ⚡ XP points per correct quiz answer
- 🎉 8 rotating celebrate screens with confetti
- 10 rotating correct/wrong feedback messages

### 📊 Progress & Certificates
- Overall progress bar across all 146 lessons
- Per-tier progress breakdown
- **Download a certificate** as a PNG — printable and shareable
- **Parent/Progress Report** screen with strong areas and areas to improve
- Export progress data as JSON

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla React 18 (UMD, no build step) |
| AI Chat | Anthropic Claude API via Netlify Function |
| Python Runtime | Skulpt 1.2.0 |
| Voice | Web Speech API |
| Audio | Web Audio API |
| Storage | localStorage (per-user keyed by email) |
| Hosting | Netlify |
| Fonts | Fredoka One · Nunito (Google Fonts) |

The entire app ships as **one HTML file** — no npm, no bundler, no build step. Open it and it works.

---

## Project Structure

```
stem-spark-academy/
├── index.html              ← The entire app (single file)
├── netlify/
│   └── functions/
│       └── chat.js         ← Serverless proxy for Claude API
└── README.md
```

The Netlify function keeps the API key server-side. The browser never sees it.

---

## Setup

### Run locally
Just open `index.html` in any modern browser. No server needed for most features.

For the AI chat to work locally you need to either:
- Run `netlify dev` (requires [Netlify CLI](https://docs.netlify.com/cli/get-started/))
- Or enter your Anthropic API key directly via **Customize → AI Setup** in the app

### Deploy to Netlify

1. Fork or clone this repo
2. Connect it to [Netlify](https://netlify.com)
3. Add an environment variable: `ANTHROPIC_API_KEY` = your key from [console.anthropic.com](https://console.anthropic.com)
4. Deploy — Netlify auto-detects the function in `/netlify/functions/`

That's it. The app works on any device with a browser, including phones and tablets.

---

## Roadmap

This is an ongoing project. Things we want to add next:

- [ ] Stripe payment integration for Pro tier
- [ ] Supabase backend (replace localStorage with real database)
- [ ] Parent dashboard with email progress reports
- [ ] More story-mode content across Tiers 2–4
- [ ] Printable workbook pages alongside lessons
- [ ] Multiplayer quiz mode
- [ ] More language support

---

## What We Learned Building This

**On the coding side:**
- How to structure a large single-file React app without a build system
- How browser APIs work (AudioContext, SpeechSynthesis, Canvas)
- Why error handling matters (the blank screen bug that took many sessions to trace to a single missing component)
- How to call external APIs securely from a browser app

**On the learning side:**
- AI is not magic — it is pattern matching on lots of examples
- Prompts are instructions, and better instructions get better results
- Every app you use was built by someone starting from scratch, making mistakes, and iterating
- Building something for someone you care about makes you care more about getting it right

---

## Contributing

This is primarily a personal project but suggestions, bug reports, and ideas are very welcome. Open an issue or start a discussion.

---

## License

MIT — free to use, learn from, and build on.

---

*Built with love, curiosity, and a lot of iteration. — A parent & their daughter* 🤖✨
