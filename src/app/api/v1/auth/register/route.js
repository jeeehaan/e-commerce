import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { hash } from "bcrypt";

export async function POST(request) {
  const { name, username, email, password } = await request.json();

  try {
    const hashedPassword = await hash(password, 10);
    const createUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ data: createUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
