import React from "react";
import Link from "next/link";
export const Product = () => {
  return (
    <div>
      <section className="flex items-center justify-between">
        <h4> All Product</h4>
        <Link href="/dashboard/product/create">
          <button>Create</button>
        </Link>
      </section>
    </div>
  );
};
