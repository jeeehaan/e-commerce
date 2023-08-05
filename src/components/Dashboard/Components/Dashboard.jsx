"use client";

import { Chart, Box, Document } from "iconsax-react";

const menu = [
  { label: "Dashboard", route: "/dashboard", icon: <Chart /> },
  { label: "Product", route: "/product", icon: <Box /> },
  { label: "Order", route: "/order", icon: <Document /> },
];
export const Dashboard = () => {
  return <div>Dashboard</div>;
};
