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
          slug: {
            is: slug,
          },
        },
      });
      return NextResponse.json({ data: product }, { status: 200 });
    }

    const allproduct = await prisma.product.findMany();
    return NextResponse.json({ data: allproduct }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function POST(request) {
  const {
    name,
    slug,
    shortDescription,
    overview,
    price,
    featuredImage,
    file,
    images,
    categoryId,
    userId,
  } = await request.json();

  try {
    const createProduct = await prisma.product.create({
      data: {
        name,
        slug,
        shortDescription,
        overview,
        price,
        featuredImage,
        file,
        images,
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
