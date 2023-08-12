import { SingleProduct } from "@/components/Home/Components/SingleProduct";
import { API_URL } from "@/config/apiUrl";

async function getData(slug) {
  const res = await fetch(`${API_URL}/product?slug=${slug}`, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const slug = params.productSlug;

  const { data } = await getData(slug);
  return <SingleProduct productData={data} />;
}
