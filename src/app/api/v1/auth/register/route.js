import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}
export async function POST(request) {
  const { name, username, email, password } = await request.json();
  // return NextResponse.json({ data: { name, username, email, password } });

  try {
    const createUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
      },
    });
    return NextResponse.json({ data: createUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
