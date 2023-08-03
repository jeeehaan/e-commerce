import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const category = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}
