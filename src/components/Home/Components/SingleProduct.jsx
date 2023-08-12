"use client";
import React from "react";
import Image from "next/image";
import { imageURL } from "./ProductCard";

export const SingleProduct = ({ productData }) => {
  console.log(productData);
  const productPreviews = JSON.parse(productData.images);
  return (
    <main className="space-y-12">
      <div className="flex justify-between">
        <section className="space-y-4">
          <h1>{productData.name}</h1>
          <div>
            <p className="font-bold">Description</p>
            <p>{productData.shortDescription}</p>
          </div>
          <section className="space-x-8">
            <div className="badge badge-primary">{productData.category.name}</div>
            <div className="badge badge-ghost badge-outline">{productData.user.username}</div>
          </section>
        </section>
        <section>
          <button>USD {productData.price}</button>
        </section>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {productPreviews.map((image) => {
          return <Image src={`${imageURL}/${productData.id}/${image.name}`} width={600} height={600} className="rounded-2xl" />;
        })}
      </div>
      <div>
        <p className="font-bold">Overview</p>
        <p className="whitespace-pre-line">{productData.overview}</p>
      </div>
    </main>
  );
};
