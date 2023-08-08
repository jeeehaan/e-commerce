"use client";

import { Chart, Box, Document } from "iconsax-react";
import Link from "next/link";
const menu = [
  { label: "Dashboard", route: "/dashboard", icon: <Chart /> },
  { label: "Product", route: "/dashboard/product", icon: <Box /> },
  { label: "Order", route: "/dashboard/order", icon: <Document /> },
];

export const DashboardTemplate = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[230px] p-6 border-r-2 border-purple-300 bg-purple-100 space-y-4">
        {menu.map(({ label, route, icon }, index) => {
          return (
            <Link href={route} key={index} className="block">
              <div className="flex items-center gap-4 p-3 hover:bg-primary rounded-xl cursor-pointer">
                <div>{icon}</div>
                <div>{label}</div>
              </div>
            </Link>
          );
        })}
      </aside>
      <main className="w-[calc(100vw-230px)] p-6 overflow-auto"> {children}</main>
    </div>
  );
};
