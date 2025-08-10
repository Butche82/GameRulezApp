export const runtime3 = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { retrieveAndAnswer } from "../../../lib/vector";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { query, gameFilter, strict, allowInterpretation } = body as {
    query: string;
    gameFilter?: string[];
    strict?: boolean;                // default true
    allowInterpretation?: boolean;   // default true
  };
  if (!query?.trim()) return NextResponse.json({ error: "query required" }, { status: 400 });
  const res = await retrieveAndAnswer({ query, gameFilter, strict, allowInterpretation });
  return NextResponse.json(res);
}
