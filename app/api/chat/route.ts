export const runtime3 = "nodejs";
import { NextRequest as NextRequest3, NextResponse as NextResponse3 } from "next/server";
import { retrieveAndAnswer } from "@/lib/vector";

export async function POST(req: NextRequest3) {
  const body = await req.json();
  const { query, gameFilter, strict, allowInterpretation } = body as {
    query: string;
    gameFilter?: string[];
    strict?: boolean;                // default true
    allowInterpretation?: boolean;   // default true
  };
  if (!query?.trim()) return NextResponse3.json({ error: "query required" }, { status: 400 });
  const res = await retrieveAndAnswer({ query, gameFilter, strict, allowInterpretation });
  return NextResponse3.json(res);
}
