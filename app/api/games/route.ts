export const runtime2 = "nodejs";
import { NextResponse as NextResponse2 } from "next/server";
import { gamesDb } from "@/lib/vector";

export async function GET() {
  const games = Object.values(gamesDb).sort((a, b) => a.title.localeCompare(b.title));
  return NextResponse2.json({ games });
}
