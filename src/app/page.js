import Image from "next/image";
import { Home } from "@/components/Home/Components/Home";
import { API_URL } from "@/config/apiUrl";

async function getData() {
  const res = await fetch(`${API_URL}/product`, { cache: "no-store" });
  const data = await res.json();
  return data;
}
export default async function Page() {
  const { data } = await getData();
  console.log(data);

  return <Home productData={data} />;
}
