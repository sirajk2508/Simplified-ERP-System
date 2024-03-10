import React, { useState } from 'react';

const AddProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="block w-full border-gray-300 rounded-md mb-2 px-2 py-1"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddProductForm;
