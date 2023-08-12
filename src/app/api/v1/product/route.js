import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  console.log(slug);
  try {
    if (slug) {
      const product = await prisma.product.findFirst({
        where: {
          slug,
        },
        include: {
          category: true,
          user: true,
        },
      });
      return NextResponse.json({ data: product }, { status: 200 });
    }

    const allproduct = await prisma.product.findMany({
      include: {
        category: true,
        user: true,
      },
    });
    return NextResponse.json({ data: allproduct }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function POST(request) {
  const { name, slug, shortDescription, overview, price, featuredImage, file, images, categoryId, userId } = await request.json();

  try {
    const createProduct = await prisma.product.create({
      data: {
        name,
        slug,
        shortDescription,
        overview,
        price: Number(price),
        featuredImage,
        file,
        images: JSON.stringify(images),
        categoryId,
        userId,
      },
    });
    return NextResponse.json({ data: createProduct }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
