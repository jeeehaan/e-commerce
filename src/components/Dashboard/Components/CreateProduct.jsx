import React from "react";

export const CreateProduct = () => {
  return (
    <div className="space-y-12 max-w-2xl m-auto">
      <div>
        <h3>Create new product</h3>
        <p>Fill your product's detail</p>
      </div>
      <div className="space-y-4">
        <input placeholder="Product Name" />
        <input placeholder="Short Description" />
        <textarea placeholder="Overview" />
        <input placeholder="99" type="number" />
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

        <button>Create</button>
      </div>
    </div>
  );
};
