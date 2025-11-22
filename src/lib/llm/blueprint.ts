import OpenAI from "openai";

export async function createBlueprint(spec: string) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Create a JSON blueprint for a web app described as:

"""${spec}"""

Return ONLY valid JSON with:
- appName
- summary
- pages[] (route + purpose)
- entities[] (name + fields[])
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
  return JSON.parse(raw || "{}");
}
