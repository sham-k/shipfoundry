import { NextResponse } from "next/server";
import { generateFiles } from "@/lib/codegen";
import { zipFiles } from "@/lib/zip";

export async function POST(req: Request) {
  const { blueprint } = await req.json();

  try {
    const files = await generateFiles(blueprint);
    const zip = await zipFiles(files);

    // Convert Uint8Array to Blob for NextResponse compatibility
    const blob = new Blob([zip as BlobPart], { type: "application/zip" });

    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=shipfoundry_app.zip",
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}