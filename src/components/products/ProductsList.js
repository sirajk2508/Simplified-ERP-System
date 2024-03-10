import React, { useState } from 'react';

const ProductsList = ({products, setProducts}) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
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
      name: '',
      category: '',
      price: '',
      stock: '',
    });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedProduct({
      name: '',
      category: '',
      price: '',
      stock: '',
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-md">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
                className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="category"
                value={editedProduct.category}
                onChange={handleInputChange}
                className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
                placeholder="Category"
              />
              <input
                type="text"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
                className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
                placeholder="Price"
              />
              <input
                type="number"
                name="stock"
                value={editedProduct.stock}
                onChange={handleInputChange}
                className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
                placeholder="Stock"
              />
              <div className="flex justify-end mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-700 mt-2">{product.price}</p>
              <p className="text-gray-700">Stock: {product.stock}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

