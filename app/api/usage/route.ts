import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const FREE_MONTHLY_LIMIT = 10;

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const month = new Date().toISOString().slice(0, 7);
  const saved = user.privateMetadata.everyFormulaUsage as
    | { month?: string; count?: number }
    | undefined;
  const used = saved?.month === month ? Math.max(0, Number(saved.count) || 0) : 0;

  return NextResponse.json({
    month,
    limit: FREE_MONTHLY_LIMIT,
    used,
    remaining: Math.max(0, FREE_MONTHLY_LIMIT - used),
  });
}
