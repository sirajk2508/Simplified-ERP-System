import {useState} from "react";

import Pagination from "../orders/Pagination";
import ProductsTableHead from "./ProductsTableHead";
import ProductsTableBody from "./ProductsTableBody";

const ProductTable = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
        <ProductsTableHead/>
        {/* Table Body */}
        <ProductsTableBody paginatedProducts={paginatedProducts}/>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </div>
  );
};

export default ProductTable;
