"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const CreateProduct = ({ categoryData = [] }) => {
  const [productData, setProductData] = useState({
    name: "",
    shortDescription: "",
    overview: "",
    price: "",
    categoryId: "",
    featuredImage: "",
    productPreviews: [],
    downloadableFile: "",
  });

  const [featuredImage, setFeaturedImage] = useState("");
  const [productPreviews, setProductPreviews] = useState([]);

  console.log({ productPreviews });

  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFeaturedImageChange = (event) => {
    const files = event.target.files;
    const file = files[0];
    const fileName = file.name;
    setProductData({ ...productData, featuredImage: fileName });

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFeaturedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleProductPreviewChange = (event) => {
    const files = event.target.files;
    console.log(files);
    const productPreviewName = [];
    const productPreviewsBase64 = [];

    for (let i = 0; i < files.length; i++) {
      productPreviewName.push({ name: files[i].name });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        productPreviewsBase64.push({ img: fileReader.result });
        setProductPreviews(productPreviewsBase64);
      };
      fileReader.readAsDataURL(files[i]);
    }
    setProductData({ ...productData, productPreviews: productPreviewName });
    console.log(productPreviewName);
  };

  const handleDownloadableFileChange = (event) => {
    const files = event.target.files;
    const file = files[0];
    const fileName = file.name;

    setProductData({ ...productData, downloadableFile: fileName });
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
          {featuredImage && (
            <div className="relative w-full h-[300px] mb-4">
              <Image src={featuredImage} alt="Featured Image" fill className="object-cover  rounded-xl" />
            </div>
          )}
          <input type="file" onChange={handleFeaturedImageChange} />
        </div>
        <div>
          <label>Product preview</label>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {productPreviews.map(({ img }) => {
              return (
                <div className="relative w-full h-[100px]">
                  <Image src={img} alt="Image" fill className="object-cover rounded-xl" />
                </div>
              );
            })}
          </div>
          <input type="file" multiple onChange={handleProductPreviewChange} />
        </div>
        <div>
          <label>Downloadable file</label>
          <input type="file" onChange={handleDownloadableFileChange} />
        </div>

        <button onClick={handleSubmitCreateProduct}>Create</button>
      </div>
    </div>
  );
};
