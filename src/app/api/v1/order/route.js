import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");
  const userId = searchParams.get("userId");

  try {
    if (productId) {
      const order = await prisma.order.findMany({
        where: {
          productId,
        },
      });
      return NextResponse.json({ data: order }, { status: 200 });
    }
    if (userId) {
      const order = await prisma.order.findMany({
        where: {
          userId,
        },
      });
      return NextResponse.json({ data: order }, { status: 200 });
    }

    const allOrders = await prisma.order.findMany();
    return NextResponse.json({ data: allOrders }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}

export async function POST(request) {
  const { productId, userId } = await request.json();
  try {
    const createOrder = await prisma.order.create({
      data: {
        userId,
        productId,
      },
    });
    return NextResponse.json({ data: createOrder }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}
