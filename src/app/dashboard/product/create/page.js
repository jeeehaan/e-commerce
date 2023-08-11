import { CreateProduct } from "@/components/Dashboard/Components/CreateProduct";
import { API_URL } from "@/config/apiUrl";

async function getCategories() {
  const res = await fetch(`${API_URL}/category`, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getCategories();
  // console.log(data);

  return <CreateProduct categoryData={data} />;
}
