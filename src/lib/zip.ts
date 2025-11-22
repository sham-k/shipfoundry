import JSZip from "jszip";

export async function zipFiles(filesMap: Record<string, string>) {
  const zip = new JSZip();

  for (const path in filesMap) {
    zip.file(path, filesMap[path]);
  }

  return await zip.generateAsync({ type: "nodebuffer" });
}