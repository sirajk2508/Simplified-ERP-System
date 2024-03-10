import React, { useState } from "react";
import EditForm from "./EditForm";
import ProductCard from "./ProductCard";
import Pagination from "../orders/Pagination";

const ProductsList = ({ products, setProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const productToEdit = products[index];
    setEditedProduct({ ...productToEdit });
  };

  const handleSaveEdit = () => {
    const updatedProducts = [...products];
    updatedProducts[editingIndex] = editedProduct;
    setProducts(updatedProducts);
    setEditingIndex(null);
    setEditedProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            {editingIndex === index ? (
              <EditForm
                editedProduct={editedProduct}
                handleInputChange={handleInputChange}
                handleSaveEdit={handleSaveEdit}
                handleCancelEdit={handleCancelEdit}
              />
            ) : (
              <ProductCard
                product={product}
                handleEdit={() => handleEdit(index)}
                handleDelete={() => handleDelete(index)}
              />
            )}
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsList;
