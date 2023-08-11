"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePathname } from "next/navigation";

export const Template = ({ children }) => {
  const path = usePathname();
  // console.log(path);
  if (path === "/login" || path === "/join") {
    return <main className="h-screen flex justify-center items-center">{children}</main>;
  }

  if (path.startsWith("/dashboard")) {
    return <>{children}</>;
  }
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-6xl m-auto">
      <section className="space-y-12">
        <Header />
        <main className="p-6">{children}</main>
      </section>
      <Footer />
    </div>
  );
};
