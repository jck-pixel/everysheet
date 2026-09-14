import { auth, clerkClient } from "@clerk/nextjs/server";

export async function DELETE() {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "尚未登入" }, { status: 401 });

  try {
    const client = await clerkClient();
    await client.users.deleteUser(userId);
    return Response.json({ success: true });
  } catch (error) {
    console.error("[account/delete] failed", { userId, error: String(error) });
    return Response.json({ error: "帳戶刪除失敗" }, { status: 500 });
  }
}
