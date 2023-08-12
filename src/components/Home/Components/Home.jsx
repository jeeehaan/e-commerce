import React from "react";
import Image from "next/image";
import { trimString } from "@/lib/modifier/trimString";
export const Home = ({ productData = [] }) => {
  return (
    <main className="space-y-20">
      <section className="text-center max-w-2xl m-auto space-y-4">
        <h2>7,019 curated design resource to speed up your creative workflow</h2>
        <p>Join a growing family of 680,886 designer and makers from around the world</p>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {productData.map((product) => {
          const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL;
          return (
            <div className="bg-purple-200 rounded-xl cursor-pointer">
              <div className="hover:scale-105 transition duration-300 ease-in-out">
                <Image src={`${imageURL}/${product.id}/${product.featuredImage}`} width={400} height={400} className="rounded-2xl" />
              </div>
              <div className="flex justify-between p-4 text-sm">
                <div className="text-black font-medium">{trimString(product.name, 30)}</div>
                <div>USD{product.price}</div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};
