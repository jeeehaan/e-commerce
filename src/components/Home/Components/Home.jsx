import React from "react";
import { ProductCard } from "./ProductCard";
export const Home = ({ productData = [] }) => {
  return (
    <main className="space-y-20">
      <section className="text-center max-w-2xl m-auto space-y-4">
        <h2>7,019 curated design resource to speed up your creative workflow</h2>
        <p>Join a growing family of 680,886 designer and makers from around the world</p>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {productData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};
