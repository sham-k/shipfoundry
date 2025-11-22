import OpenAI from "openai";

export async function generateFiles(blueprint: any) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Given this app blueprint:

${JSON.stringify(blueprint, null, 2)}

Generate a COMPLETE, runnable Next.js 14+ app with ALL necessary files in JSON format:

{
  "files": {
    "app/page.tsx": "string",
    "app/layout.tsx": "string",
    "app/globals.css": "string",
    "package.json": "string",
    "tsconfig.json": "string",
    "next.config.js": "string",
    "tailwind.config.ts": "string",
    "postcss.config.js": "string",
    ".gitignore": "string",
    "README.md": "string"
  }
}

Requirements:
- app/page.tsx: Main page with actual UI components based on the blueprint (use Tailwind CSS, make it look professional)
- app/layout.tsx: Root layout with proper metadata and HTML structure
- app/globals.css: Tailwind CSS setup with @tailwind directives
- package.json: Include next@14, react@18, react-dom@18, typescript, tailwindcss, and all necessary dependencies
- tsconfig.json: Standard Next.js TypeScript config
- next.config.js: Basic Next.js config
- tailwind.config.ts: Tailwind configuration for the app directory
- postcss.config.js: PostCSS config for Tailwind
- .gitignore: Standard Next.js gitignore (node_modules, .next, .env.local, etc.)
- README.md: Instructions on how to run the app with npm install and npm run dev

Make the UI functional, beautiful, and based on the blueprint's entities and pages. Include forms, tables, or whatever makes sense for the app.
`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0].message.content;
  const { files } = JSON.parse(raw || "{}");

  return files;
}