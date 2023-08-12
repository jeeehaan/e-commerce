import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex gap-12">
        <Link href="/" className="font-bold ">
          Ascendancy
        </Link>
        <Link href="/">Browse All</Link>
      </div>
      <div className="flex items-center gap-12">
        <Link href="/login">Sign In</Link>
        <Link href="/login">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};
