import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productid");

  try {
    const comment = await prisma.comments.findMany({
      where: {
        productId,
      },
    });
    console.log(comment);
    return NextResponse.json({ data: comment }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}

export async function POST(request) {
  const { body, productId, userId } = await request.json();
  try {
    const createComment = await prisma.comments.create({
      data: {
        body,
        productId,
        userId,
      },
    });
    return NextResponse.json({ data: createComment }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}
