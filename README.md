<div align="center">

# 🚀 Himanshu Singh Yadav — Portfolio Website

### AI/ML Engineer &amp; Full-Stack Developer

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge&logo=github&logoColor=white)](https://ui.shadcn.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**A modern, fully-responsive personal portfolio website showcasing AI/ML projects, skills, and professional journey.**

[🌐 Live Demo](https://himanshu-personal-portfolio.vercel.app) — [💼 LinkedIn](https://www.linkedin.com/in/himanshu-singh-yadav-57144a2b7) — [🐙 GitHub](https://github.com/iamHimanshu-07) — [📧 Email](mailto:itshimanshu666@gmail.com)

</div>

---

## 📖 Table of Contents

- [About Me](#about-me)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Featured Projects](#featured-projects)
- [Installation &amp; Setup](#installation--setup)
- [Development](#development)
- [Building &amp; Deployment](#building--deployment)
- [Performance Optimizations](#performance-optimizations)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Connect With Me](#connect-with-me)
- [License](#license)

---

## 👋 About Me

I'm **Himanshu Singh Yadav**, a passionate **AI/ML Engineer** and **Full-Stack Developer** based in **Surat, Gujarat, India**. Currently pursuing a **B.Tech in Artificial Intelligence &amp; Machine Learning** at **P P Savani University**.

I specialize in:
- 🤖 **Machine Learning &amp; Deep Learning** — Building predictive models, neural networks, and intelligent systems
- 🧠 **Natural Language Processing** — Text analysis, sentiment detection, and language understanding
- 🌐 **Full-Stack Web Development** — Modern React/Next.js applications with responsive design
- ☁️ **Cloud Computing &amp; DevOps** — Deployment and scalable architecture
- 🎨 **UI/UX Design** — Creating beautiful, accessible user experiences

**What I'm Doing Now:**
- 🔭 Building intelligent AI/ML applications that solve real-world problems
- 🌱 Exploring Generative AI, LLMs, and advanced deep learning architectures
- 💬 Contributing to open-source projects and tech communities
- 📚 Sharing knowledge through blogs and tutorials
- ⚡ Open to **internships**, **freelance projects**, and **collaborations**

**Contact:** [itshimanshu666@gmail.com](mailto:itshimanshu666@gmail.com)

---

## ✨ Key Features

- 🎨 **Modern Dark Theme UI** — Clean, professional design with smooth animations and interactive hover effects
- 📱 **Fully Responsive Design** — Optimized layouts for mobile (375px), tablet (768px), and desktop (1920px+)
- ⚡ **High Performance** — Built with Next.js 16 App Router and React Server Components
- 🚀 **Fast Load Times** — Optimized images, lazy loading, and code splitting
- 🧩 **Component-Based Architecture** — Modular, reusable components using shadcn/ui
- 🌗 **Accessible** — WCAG 2.1 compliant, semantic HTML, ARIA labels, keyboard navigation
- 📊 **Analytics Ready** — Vercel Analytics integration for tracking performance
- 🎯 **SEO Optimized** — Meta tags, structured data, and social sharing optimized
- 📄 **Comprehensive Sections:**
  - Hero/Introduction with animated profile image
  - Featured Projects showcase
  - Technical Skills matrix
  - Certifications &amp; Achievements
  - Experience &amp; Education timeline
  - Contact form with validation

---

## 🛠️ Tech Stack

### Frontend
| Component | Technology | Purpose |
| --------- | ---------- | ------- |
| **Framework** | Next.js 16 (App Router) | Server-side rendering &amp; optimization |
| **Library** | React 19 | UI component development |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Components** | shadcn/ui | Pre-built accessible components |
| **Icons** | Lucide React | SVG icon library |
| **Forms** | React Hook Form | Efficient form handling |
| **Validation** | Zod | Schema validation |

### Infrastructure &amp; Deployment
| Service | Purpose |
| ------- | ------- |
| **Vercel** | Hosting &amp; deployment with auto-scaling |
| **GitHub** | Version control &amp; CI/CD |
| **Vercel Analytics** | Performance monitoring |

### Development Tools
| Tool | Purpose |
| ---- | ------- |
| **pnpm** | Fast, disk-space efficient package manager |
| **ESLint** | Code quality &amp; consistency |
| **Prettier** | Code formatting |
| **Git** | Version control |

---

## 📁 Directory Structure

```
portfolio-website/
│
├── 📄 app/
│   ├── globals.css              # Global styles &amp; theme design tokens
│   ├── layout.tsx               # Root layout with metadata &amp; fonts
│   ├── page.tsx                 # Home page (combines all sections)
│   └── sitemap.ts               # SEO sitemap
│
├── 🧩 components/
│   ├── header.tsx               # Navigation bar with links
│   ├── hero.tsx                 # Hero section with intro &amp; profile image
│   ├── projects.tsx             # Featured projects showcase
│   ├── skills.tsx               # Technical skills grid
│   ├── certificates.tsx         # Certifications &amp; awards
│   ├── achievements.tsx         # Key achievements &amp; milestones
│   ├── experience.tsx           # Experience &amp; education timeline
│   ├── contact.tsx              # Contact form &amp; information
│   ├── footer.tsx               # Footer with social links
│   │
│   └── 🎨 ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── ...
│
├── 📦 public/
│   ├── images/
│   │   ├── himanshu-profile.jpg # Profile photo
│   │   └── projects/            # Project screenshots
│   └── robots.txt               # SEO robots file
│
├── 📚 lib/
│   └── utils.ts                 # Utility functions &amp; helpers
│
├── 🎯 Configuration Files
│   ├── next.config.js           # Next.js configuration
│   ├── tailwind.config.js       # Tailwind customization
│   ├── tsconfig.json            # TypeScript configuration
│   ├── components.json          # shadcn/ui registry
│   └── package.json             # Dependencies
│
└── 📖 Documentation
    ├── README.md                # This file
    └── LICENSE                  # MIT License
```

---

## 💼 Featured Projects

### 🏆 Highlighted AI/ML Projects

| Project | Description | Tech Stack | Link |
| ------- | ----------- | ---------- | ---- |
| **Cardio.AI** | ML-powered heart disease risk prediction analyzing 11 medical parameters | Python, Flask, Scikit-Learn, Random Forest | [GitHub](https://github.com/iamHimanshu-07/Cardio.AI) |
| **MindPulse.AI** | Multi-label emotion detection from text using NLP | Python, NLP, Transformers, Streamlit | [GitHub](https://github.com/iamHimanshu-07/MindPulse.AI) |
| **VoiceFlow** | Real-time multi-language speech recognition web app | Next.js, Web Speech API, TypeScript | [GitHub](https://github.com/iamHimanshu-07/VoiceFlow) |
| **CryptoCast** | Bitcoin price prediction + live analytics dashboard | Python, LSTM, Random Forest, Streamlit | [GitHub](https://github.com/iamHimanshu-07/CryptoCast) |
| **Movie Recommendation System** | Collaborative filtering-based movie suggestions | Python, Pandas, NumPy, Scikit-Learn | [GitHub](https://github.com/iamHimanshu-07/Movie-Recommendation-System) |
| **SMS Spam Classifier** | NLP-based spam detection using TF-IDF &amp; Naive Bayes | Python, NLTK, Scikit-Learn | [GitHub](https://github.com/iamHimanshu-07/Spam-SMS-Classifier) |
| **SmartBin** | IoT touch-free smart dustbin with ultrasonic sensors | C++, Arduino, IoT | [GitHub](https://github.com/iamHimanshu-07/SmartBin) |

---

## 🚀 Installation &amp; Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js 18.17+** ([Download](https://nodejs.org))
- **pnpm 8.0+** (recommended) or npm/yarn
  ```bash
  npm install -g pnpm
  ```
- **Git** ([Download](https://git-scm.com))

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/iamHimanshu-07/Portfolio-Website.git

# 2. Navigate to the project directory
cd Portfolio-Website

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm dev

# 5. Open in browser
# Navigate to http://localhost:3000
```

### With npm or yarn

```bash
npm install
npm run dev

# OR

yarn install
yarn dev
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code quality
pnpm lint
```

> These match the `scripts` defined in `package.json`. Add `format` or `type-check` commands there if you wire up Prettier / `tsc --noEmit` scripts.

### Development Best Practices

1. **Component Development** — Create components in `/components` with proper TypeScript types
2. **Styling** — Use Tailwind CSS utility classes; add custom styles in `globals.css` when needed
3. **Type Safety** — Enable TypeScript strict mode for better type checking
4. **Performance** — Use dynamic imports for heavy components
5. **Accessibility** — Always include alt text for images, ARIA labels for interactive elements

---

## 🏗️ Building &amp; Deployment

### Production Build

```bash
# Create optimized production bundle
pnpm build

# Test production build locally
pnpm start

# Open http://localhost:3000
```

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Configure custom domain in Vercel dashboard
5. Enable automatic deploys on push

```bash
# Deploy from CLI (optional)
npm install -g vercel
vercel
```

### Deploy to Other Platforms

**GitHub Pages:**
```bash
pnpm build
# Configure static export in next.config.js
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

---

## ⚡ Performance Optimizations

### Implemented Techniques

- **Image Optimization** — Next.js Image component with lazy loading
- **Code Splitting** — Automatic code splitting at route level
- **Dynamic Imports** — Load heavy components on demand
- **CSS Optimization** — Tailwind purging unused styles
- **Font Optimization** — System fonts loaded from next/font
- **Caching Strategy** — Static generation and incremental static regeneration

### Performance Goals

Targets guided by the App Router / RSC setup:
- **Lighthouse:** aim for 90+ across Accessibility, Best Practices, and SEO
- **Core Web Vitals:** green LCP, FID/INP, and CLS
- **Page Load:** &lt;2s on 4G
- **Bundle Size:** kept lean with tree-shaking and dynamic imports

---

## 📱 Responsive Design

### Breakpoints &amp; Optimization

| Device | Breakpoint | Optimization |
| ------ | ---------- | ------------ |
| **Mobile** | 375px - 640px | Single column, stacked layout, touch-friendly |
| **Tablet** | 641px - 1024px | Two-column grid, optimized spacing |
| **Desktop** | 1025px + | Full multi-column layout, advanced animations |

### Mobile-First Approach

- Base styles optimized for mobile
- Progressive enhancement for larger screens
- Touch-friendly UI elements (min 44x44px)
- Readable font sizes (min 16px)
- Optimized images for different DPR

---

## ♿ Accessibility

### WCAG 2.1 Compliance

- ✅ **Level AA** standards compliance
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast ratios (WCAG AA)
- ✅ Alt text for all images
- ✅ Focus indicators on interactive elements
- ✅ Skip navigation links

### Testing

```bash
# Manual testing
# - Keyboard navigation: Use Tab, Enter, Arrow keys
# - Screen readers: Test with NVDA (Windows), JAWS, or VoiceOver (Mac)
```

---

## 🔐 Security &amp; Best Practices

- ✅ No sensitive data in code/repo
- ✅ Environment variables for secrets
- ✅ Content Security Policy headers
- ✅ HTTPS enforced
- ✅ Regular dependency updates
- ✅ Code scanning enabled
- ✅ Git signed commits

---

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Contact Form (Optional)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other Configuration
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Connect With Me

<div align="center">

| Platform | Link |
| -------- | ---- |
| **Email** | [itshimanshu666@gmail.com](mailto:itshimanshu666@gmail.com) |
| **LinkedIn** | [Himanshu Singh Yadav](https://www.linkedin.com/in/himanshu-singh-yadav-57144a2b7) |
| **GitHub** | [@iamHimanshu-07](https://github.com/iamHimanshu-07) |
| **Twitter** | [@iamhimanshu2312](https://x.com/iamhimanshu2312) |
| **Portfolio** | [himanshu-personal-portfolio.vercel.app](https://himanshu-personal-portfolio.vercel.app) |

### Quick Links

[![Email](https://img.shields.io/badge/Email-itshimanshu666@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:itshimanshu666@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/himanshu-singh-yadav-57144a2b7)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iamHimanshu-07)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/iamhimanshu2312)

</div>

---

## 📊 Git Branches Strategy

- `main` — Production-ready code, deployed to Vercel on every push
- Feature branches follow the convention `feature/<name>` or `fix/<name>`, branched from and merged back into `main` via PR

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for hosting and deployment
- [Next.js](https://nextjs.org) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- All open-source contributors and the community

---

<div align="center">

### ⭐ If you find this portfolio helpful, please consider giving it a star!

**Built with ❤️ by Himanshu Singh Yadav**

Last Updated: 2026 | [View Live](https://himanshu-personal-portfolio.vercel.app)

</div>
