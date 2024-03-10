import React, { useState } from 'react';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import { PRODUCTS_DATA } from '../lib/constants/config';

const Products = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState(PRODUCTS_DATA);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    setShowAddForm(false);
  };

  const handleCancelForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className="m-2 p-2">
      <div className="flex items-center justify-around mb-4">
        <h1 className="text-3xl font-bold">Product Management</h1>
        {!showAddForm && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowAddForm(true)}
          >
            Add Product
          </button>
        )}
      </div>
      {showAddForm && (
        <AddProductForm onAdd={handleAddProduct} onCancel={handleCancelForm} />
      )}
      <ProductsList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Products;

