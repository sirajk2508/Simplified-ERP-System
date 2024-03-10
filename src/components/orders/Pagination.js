import { useState } from "react";
import { ORDERS_DATA } from "../lib/constants/config";

const Pagination = ({currentPage, totalPages, handlePageChange}) => {

  return (
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
  );
};

export default Pagination;
