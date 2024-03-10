import React from "react";

const ProductsTableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Product Name</th>
        <th className="py-3 px-6 text-left">Product Number</th>
        <th className="py-3 px-6 text-left">Product Price</th>
        <th className="py-3 px-6 text-left">Description</th>
        <th className="py-3 px-6 text-left">Action</th>
      </tr>
    </thead>
  );
};

export default ProductsTableHead;
