# ShipFoundry 🚀

> Transform your ideas into production-ready Next.js applications in seconds.

ShipFoundry is an AI-powered application builder that uses GPT-4o-mini to generate complete, runnable Next.js apps from simple text descriptions. No more boilerplate—just describe what you want to build and download a fully-configured codebase.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **🤖 AI-Powered Blueprint Generation** - Converts natural language descriptions into structured app blueprints
- **💻 Complete Code Generation** - Generates production-ready Next.js apps with all necessary files
- **🎨 Beautiful UI** - Professional Tailwind CSS styling included out of the box
- **📦 Instant Download** - Get a ZIP file with your complete application
- **⚡ Production Ready** - Fully configured TypeScript, ESLint, and Tailwind setup
- **🔧 Zero Configuration** - Just unzip, install dependencies, and run

## 🎯 What Gets Generated

Each generated app includes:

- **app/page.tsx** - Main page with UI components based on your blueprint
- **app/layout.tsx** - Root layout with proper metadata
- **app/globals.css** - Tailwind CSS configuration
- **package.json** - All necessary dependencies
- **tsconfig.json** - TypeScript configuration
- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind setup
- **postcss.config.js** - PostCSS configuration
- **.gitignore** - Git ignore rules
- **README.md** - Setup and run instructions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sham-k/shipfoundry.git
   cd shipfoundry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

1. **Describe Your App**

   Enter a description of the application you want to build. For example:
   ```
   A task management app with a kanban board, user authentication,
   and the ability to create, edit, and delete tasks
   ```

2. **Generate Blueprint**

   Click "Generate Blueprint" to create a structured JSON blueprint with:
   - App name and summary
   - Pages and routes
   - Data entities and fields

3. **Generate Code**

   Review the blueprint and click "Generate Downloadable App" to create the full codebase

4. **Download & Run**

   Download the ZIP file, extract it, and run:
   ```bash
   npm install
   npm run dev
   ```

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **AI:** [OpenAI GPT-4o-mini](https://openai.com/)
- **File Packaging:** [JSZip](https://stuk.github.io/jszip/)

## 📁 Project Structure

```
shipfoundry/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── blueprint/      # Blueprint generation endpoint
│   │   │   └── generate/       # Code generation endpoint
│   │   ├── page.tsx            # Main UI
│   │   └── layout.tsx          # Root layout
│   └── lib/
│       ├── llm/
│       │   └── blueprint.ts    # Blueprint generation logic
│       ├── codegen.ts          # Code generation logic
│       └── zip.ts              # ZIP file creation
├── .env.local                  # Environment variables (create this)
├── package.json
└── README.md
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy ShipFoundry is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sham-k/shipfoundry)

1. Click the button above or run:
   ```bash
   npx vercel --prod
   ```

2. Add your `OPENAI_API_KEY` environment variable in the Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add `OPENAI_API_KEY` with your API key

### Deploy to Other Platforms

ShipFoundry works on any platform that supports Next.js:
- **Netlify:** Connect your repo and add environment variables
- **Railway:** Deploy directly from GitHub
- **DigitalOcean App Platform:** Use the Next.js buildpack

## 💡 Example Use Cases

- **Prototype Rapidly** - Test ideas without writing boilerplate
- **Learn Next.js** - See how complete apps are structured
- **Kickstart Projects** - Get a solid foundation to build upon
- **Client Demos** - Quickly create mockups for presentations
- **Education** - Teaching tool for modern web development

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Created by [@sham-k](https://github.com/sham-k)

---

<p align="center">Made with ❤️ and AI</p>
