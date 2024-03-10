import React from "react";

const TableBody = ({paginatedOrders}) => {
  return (
    <tbody className="text-gray-600 text-sm font-light">
      {paginatedOrders.map((order) => (
        <tr key={order.id} className="border-b border-gray-200">
          <td className="py-3 px-6 text-left">{order.id}</td>
          <td className="py-3 px-6 text-left">{order.productId}</td>
          <td className="py-3 px-6 text-left">{order.customerName}</td>
          <td className="py-3 px-6 text-left">{order.orderDate}</td>
          <td className="py-3 px-6 text-left">{order.orderTotal}</td>
          <td className="py-3 px-6 text-left">{order.shippingAddress}</td>
          <td className="py-3 px-6 text-left">
            <span
              className={`inline-block py-1 px-3 rounded-full ${
                order.orderStatus === "placed"
                  ? "bg-blue-400 text-white"
                  : order.orderStatus === "confirmed"
                  ? "bg-orange-400 text-white"
                  : order.orderStatus === "shipped"
                  ? "bg-green-400 text-white"
                  : order.orderStatus === "out_for_delivery"
                  ? "bg-yellow-400 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {order.orderStatus}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
