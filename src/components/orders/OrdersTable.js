import { useState } from 'react';
import { ORDERS_DATA } from '../lib/constants/config';

const OrdersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;
    const totalPages = Math.ceil(ORDERS_DATA.length / ordersPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const paginatedOrders = ORDERS_DATA.slice(
      (currentPage - 1) * ordersPerPage,
      currentPage * ordersPerPage
    );
  
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
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
          </table>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 mx-1 rounded-md text-sm ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white focus:outline-none"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      );
  };
  
  export default OrdersTable;
  