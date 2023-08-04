import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { cookies } from "next//headers";
export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (findUser) {
      const isPasswordMatch = await compare(password, findUser.password);

      if (isPasswordMatch) {
        const payload = {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          username: findUser.username,
          bio: findUser.bio,
        };

        const accessToken = sign(payload, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "7d",
        });
        cookies().set("accessToken", accessToken);
        return NextResponse.json({ data: payload }, { status: 200 });
      }
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
