import React from "react";
import Image from "next/image";
import { trimString } from "@/lib/modifier/trimString";
import Link from "next/link";

const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="bg-purple-200 rounded-xl cursor-pointer">
        <div className="hover:scale-105 transition duration-300 ease-in-out">
          <Image src={`${imageURL}/${product.id}/${product.featuredImage}`} width={400} height={400} className="rounded-2xl" />
        </div>
        <div className="flex justify-between p-4 text-sm">
          <div className="text-black font-medium">{trimString(product.name, 30)}</div>
          <div>USD{product.price}</div>
        </div>
      </div>
    </Link>
  );
};
