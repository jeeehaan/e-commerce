import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (findUser) {
      const isPasswordMatch = password === findUser.password;

      if (isPasswordMatch)
        return NextResponse.json({ data: findUser }, { status: 200 });

      return NextResponse.json(
        { error: "Your password is incorrect" },
        { status: 401 }
      );
    }

    return NextResponse.json({ data: findUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
