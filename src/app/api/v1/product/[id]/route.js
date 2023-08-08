import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    return NextResponse.json({ data: product }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
