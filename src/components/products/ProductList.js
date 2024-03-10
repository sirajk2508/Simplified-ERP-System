import {useState} from "react";

import Pagination from "../orders/Pagination";
import ProductsTableHead from "./ProductsTableHead";
import ProductsTableBody from "./ProductsTableBody";

const ProductList = ({ products }) => {
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

export default ProductList;


/*

Okay now I want to make a page in my erp system using reactjs and tailwindcss.
So the page should show the list of products available in the website and basically the erp system is related to mobile, laptop and electronic devices.
My requirements are the data should be displayed in tabular format and the table should not have vertical lines.
Create the dummy data's and work according to the requirements below:

	Products Management:
●	Present a list of products with details such as name, category, price, and stock quantity, using mock data.
●	Enable functionalities to add, edit, and delete products.
*/