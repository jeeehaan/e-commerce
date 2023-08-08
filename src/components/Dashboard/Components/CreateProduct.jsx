"use client";

import { useEffect, useState } from "react";

export const CreateProduct = ({ categoryData = [] }) => {
  const [productData, setProductData] = useState({
    name: "",
    shortDescription: "",
    overview: "",
    price: "",
    categoryId: "",
  });

  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmitCreateProduct = () => {
    console.log(productData);
  };

  useEffect(() => {
    setProductData({ ...productData, categoryId: categoryData[0].id });
  }, [categoryData]);

  return (
    <div className="space-y-12 max-w-2xl m-auto">
      <div>
        <h3>Create new product</h3>
        <p>Fill your product's detail</p>
      </div>
      <div className="space-y-4">
        <input name="name" placeholder="Product Name" onChange={handleEventChange} />
        <input name="shortDescription" placeholder="Short Description" onChange={handleEventChange} />
        <textarea name="overview" placeholder="Overview" onChange={handleEventChange} />
        <input name="price" placeholder="99" type="number" onChange={handleEventChange} />
        <select name="categoryId" onChange={handleEventChange}>
          {categoryData.map(({ name, id }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <div>
          <label>Featured Image</label>
          <input type="file" />
        </div>
        <div>
          <label>Product preview</label>
          <input type="file" />
        </div>
        <div>
          <label>Downloadable file</label>
          <input type="file" />
        </div>

        <button onClick={handleSubmitCreateProduct}>Create</button>
      </div>
    </div>
  );
};
