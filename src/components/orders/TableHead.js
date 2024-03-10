import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">ID</th>
        <th className="py-3 px-6 text-left">Product ID</th>
        <th className="py-3 px-6 text-left">Customer Name</th>
        <th className="py-3 px-6 text-left">Order Date</th>
        <th className="py-3 px-6 text-left">Order Total</th>
        <th className="py-3 px-6 text-left">Shipping Address</th>
        <th className="py-3 px-6 text-left">Order Status</th>
      </tr>
    </thead>
  );
};

export default TableHead;
