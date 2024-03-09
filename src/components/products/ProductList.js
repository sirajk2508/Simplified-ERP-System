import {useState} from "react";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const ProductTable = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Assuming 9 products per page
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse overflow-y-scroll">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Product Number</th>
            <th className="py-3 px-6 text-left">Product Price</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="text-gray-600 text-sm font-light">
          {paginatedProducts.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {product.name}
              </td>
              <td className="py-3 px-6 text-left">{product.number}</td>
              <td className="py-3 px-6 text-left">{product.price}</td>
              <td className="py-3 px-6 text-left">{product.description}</td>
              <td className="py-3 px-6 text-left">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                <IoIosAdd fontSize={18} />
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  <AiOutlineDelete fontSize={18}/>
                </button>
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

export default ProductTable;
