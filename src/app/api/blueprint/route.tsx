import { NextResponse } from "next/server";
// If the file exists at src/lib/llm/blueprint.ts, no change needed.
// If the file is actually at src/app/lib/llm/blueprint.ts, update the import:
import { createBlueprint } from "@/lib/llm/blueprint";

export async function POST(req: Request) {
  const { spec } = await req.json();

  if (!spec) {
    return NextResponse.json({ error: "Missing spec" }, { status: 400 });
  }

  try {
    const blueprint = await createBlueprint(spec);
    return NextResponse.json({ blueprint });
  } catch (err) {
    console.error("Blueprint generation error:", err);
    const errorMessage = err instanceof Error ? err.message : "Blueprint generation failed";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}