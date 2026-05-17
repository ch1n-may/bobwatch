# 🛡️ BobWatch - AI Code Governance for the Bob Era

<div align="center">

![BobWatch Banner](https://img.shields.io/badge/Built_with-IBM_Bob-0f62fe?style=for-the-badge&logo=ibm)
![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js)
![Gemini AI](https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**IBM Bob builds fast. BobWatch keeps it honest.**

[Live Demo](https://bobwatch.vercel.app) • [Documentation](#-documentation) • [Bob Sessions](./bob_sessions)

</div>

---

## 🎯 The Problem We Solve

In the age of AI-powered development, **IBM Bob** and similar AI agents can ship entire features in minutes. But there's a critical question:

> **"How do you know the AI didn't sneak in unintended changes, security vulnerabilities, or collateral damage?"**

Traditional code review is too slow for AI-speed development. You need **AI-speed governance**.

### Enter BobWatch 🛡️

BobWatch is the **first AI governance layer** specifically designed for Bob-generated code. It analyzes GitHub Pull Requests in real-time, comparing what you *asked for* against what was *actually built*, and categorizes every change as:

- ✅ **INTENDED** - Direct fulfillment of your requirements
- ⚠️ **COLLATERAL** - Necessary side effects (dependencies, configs, refactoring)
- 🚨 **RISKY** - Security vulnerabilities, auth bypasses, exposed secrets, MCP threats

---

## 🚀 Key Features

### 1. **Intent vs Reality Analysis**
Paste any GitHub PR URL and describe what you asked Bob to build. BobWatch uses **Gemini 2.5 Flash** to analyze the complete diff and calculate your **Trust Reality Delta (TRD)** score.

### 2. **MCP Infrastructure Security** (May 2026 Focus)
Detects cutting-edge AI agent vulnerabilities:
- 🚨 **Instruction Boundary Breaches** - Data/command separation failures
- 🚨 **Confused Deputy Attacks** - AI agent privilege escalation
- 🚨 **Prompt Injection Vectors** - Hidden commands in tool responses

### 3. **Real-Time File Monitoring** (BobWatch Wrapper)
Automatically watches your codebase for changes and analyzes files in real-time:
```bash
npm run watch:dev  # Start dev server + file watcher
```

### 4. **AI Auto-Remediation**
One-click security fixes powered by Gemini:
- Generates secure replacement code
- Creates automatic backups
- Downloads remediated files instantly

### 5. **Bob Session Import**
Upload raw Bob IDE session logs for forensic analysis of entire development conversations.

---

## 📊 Trust Reality Delta (TRD) Score

The **TRD Score** quantifies the gap between developer intent and actual implementation:

```javascript
// Scoring Algorithm
let score = 100;  // Start with perfect trust

// Deductions
score -= (riskyFiles.length * 20);      // -20% per security issue
score -= (collateralFiles.length * 5);  // -5% per side effect

// Final score clamped to 0-100
```

### Score Interpretation
| Score | Status | Action |
|-------|--------|--------|
| 90-100% | ✅ **Excellent** | Ship with confidence |
| 70-89% | ⚠️ **Good** | Minor concerns, review collateral |
| 50-69% | 🔍 **Moderate** | Significant drift, careful review needed |
| 0-49% | 🚨 **Critical** | Major issues detected, DO NOT MERGE |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **IBM Bob** | Built 100% of the application |
| **Next.js 14** | React framework with App Router |
| **Gemini 2.5 Flash** | AI-powered security analysis |
| **GitHub API** | Pull request diff extraction |
| **Vercel** | Production deployment |
| **Node.js File Watcher** | Real-time code monitoring |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Gemini API key ([Get one free](https://aistudio.google.com/app/apikey))
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ch1n-may/bobwatch.git
cd bobwatch

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# 4. Start development server
npm run dev

# 5. (Optional) Start with file watcher
npm run watch:dev
```

Open [http://localhost:3000](http://localhost:3000) and start analyzing!

---

## 📖 Documentation

### Environment Variables

Create `.env.local` in the root directory:

```env
# Required: Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Presentation Mode (bypasses GitHub API for demos)
PRESENTATION_MODE=false
```

### Available Scripts

```bash
npm run dev          # Start Next.js dev server
npm run build        # Build for production
npm run start        # Start production server
npm run watch:dev    # Dev server + file watcher
npm run watch        # File watcher only
```

### BobWatch Wrapper Configuration

Edit `scripts/config/wrapper-config.js` to customize:

```javascript
module.exports = {
  watchDirectories: ['app/', 'scripts/'],  // Directories to monitor
  excludePatterns: ['node_modules', '.git'],
  debounceDelay: 500,  // ms to wait before analysis
  maxConcurrentAnalysis: 3,
  backupRetention: 10  // Keep last 10 backups per file
};
```

---

## 🎯 Use Cases

### 1. **Bob-Generated Code Review**
```
1. Ask Bob to build a feature
2. Bob creates a PR
3. Paste PR URL into BobWatch
4. Get instant security analysis
5. Auto-fix vulnerabilities with one click
```

### 2. **Real-Time Development Monitoring**
```bash
npm run watch:dev
# BobWatch monitors your codebase as you code
# Instant alerts for security issues
# Automatic remediation suggestions
```

### 3. **Session Forensics**
```
1. Export your Bob IDE session log
2. Upload to BobWatch
3. Get complete audit of what Bob built vs. what you asked
4. Identify drift and security issues
```

---

## 🔒 Security Features

### Traditional Vulnerabilities
- SQL Injection
- XSS (Cross-Site Scripting)
- Authentication Bypasses
- Exposed Secrets & Hardcoded Credentials
- Path Traversal
- Command Injection
- Resource Exhaustion

### AI-Era Vulnerabilities (MCP Focus)
- **Instruction Boundary Breaches** - Untrusted data mixed with AI commands
- **Confused Deputy Attacks** - AI agent privilege escalation
- **Prompt Injection** - Hidden commands in tool responses
- **Tool Manifest Vulnerabilities** - Overly broad permissions
- **OpenAPI Schema Exploits** - Unrestricted endpoint access

---

## 📂 Project Structure

```
bobwatch/
├── app/                      # Next.js App Router
│   ├── api/
│   │   ├── analyze/         # PR analysis endpoint
│   │   └── analyze-file/    # Single file analysis
│   ├── results/             # Results page
│   └── page.js              # Homepage
├── scripts/
│   ├── bobwatch-wrapper.js  # File watcher entry point
│   ├── config/              # Wrapper configuration
│   └── lib/                 # Core wrapper modules
├── bob_sessions/            # Complete Bob IDE development logs
├── .env.local              # Environment variables (not in git)
└── README.md               # You are here
```

---

## 🎓 Bob Sessions - Complete Development History

The `/bob_sessions` directory contains **complete, unedited logs** of every conversation with IBM Bob during development. This is a unique resource showing:

- How BobWatch was built from scratch in 24 hours
- Real-world Bob prompting strategies
- Debugging sessions and problem-solving
- Evolution of features and architecture

**Total Sessions:** 30+  
**Total Tokens:** ~2M+  
**Development Time:** 24 hours  
**Human-Written Code:** ~50 lines  
**Bob-Generated Code:** ~2000+ lines

---

## 👥 Team: One More Prompt

Built by two engineering students from Bangalore who shipped BobWatch in 24 hours using IBM Bob:

- **Chinmay** - Full-stack development, AI integration, security research
- **Partner** - Architecture, deployment, testing, documentation

### Hackathon Stats
- **Event:** IBM Bob Hackathon 2026
- **Build Time:** 24 hours
- **Coffee Consumed:** ∞
- **Bob Prompts:** 500+
- **Lines of Code (Human):** ~50
- **Lines of Code (Bob):** ~2000+

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# GEMINI_API_KEY=your_key_here
# PRESENTATION_MODE=false
```

### Docker

```bash
# Build image
docker build -t bobwatch .

# Run container
docker run -p 3000:3000 -e GEMINI_API_KEY=your_key bobwatch
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request (and analyze it with BobWatch! 😉)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **IBM Bob Team** - For creating the AI that built this entire application
- **Google Gemini Team** - For the powerful 2.5 Flash model
- **Vercel** - For seamless deployment
- **The Open Source Community** - For inspiration and tools

---

## 📞 Contact & Links

- **Live Demo:** [bobwatch.vercel.app](https://bobwatch.vercel.app)
- **GitHub:** [github.com/ch1n-may/bobwatch](https://github.com/ch1n-may/bobwatch)
- **Team:** One More Prompt
- **Hackathon:** IBM Bob Hackathon 2026

---

<div align="center">

**Made with IBM Bob 🤖 | Secured by BobWatch 🛡️**

*"In Bob we trust, but BobWatch we verify."*

</div>
