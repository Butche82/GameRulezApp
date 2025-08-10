import fetch2 from "node-fetch";
import pdf from "pdf-parse";

export async function fetchPdf(url: string): Promise<Buffer | null> {
  try {
    const r = await fetch2(url);
    if (!r.ok) return null;
    const buf = await r.buffer();
    if (buf.length < 1024) return null;
    return buf;
  } catch { return null; }
}
