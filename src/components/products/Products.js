import React, { useState } from 'react';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import { PRODUCTS_DATA } from '../lib/constants/config';

const Products = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState(PRODUCTS_DATA);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="m-2 p-2">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        {!showAddForm && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            Add Product
          </button>
        )}
      </div>
      {showAddForm && <AddProductForm onAdd={handleAddProduct} />}
      <ProductsList products={products} setProducts={setProducts}/>
    </div>
  );
};

export default Products;

