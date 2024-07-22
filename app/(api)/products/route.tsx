import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ status: 401, message: "unauthorized" });
  return NextResponse.json({ status: 200, message: "OK" });
}

