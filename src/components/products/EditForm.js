const EditForm = ({
  editedProduct,
  handleInputChange,
  handleSaveEdit,
  handleCancelEdit,
}) => {
  return (
    <>
      <input
        type="text"
        name="name"
        value={editedProduct.name}
        onChange={handleInputChange}
        className="block w-full border-gray-300 bg-neutral-50 rounded-md mb-2 px-2 py-1"
        placeholder="Product Name"
      />
      <input
        type="text"
        name="category"
        value={editedProduct.category}
        onChange={handleInputChange}
        className="block w-full border-gray-300 bg-neutral-50 rounded-md mb-2 px-2 py-1"
        placeholder="Category"
      />
      <input
        type="text"
        name="price"
        value={editedProduct.price}
        onChange={handleInputChange}
        className="block w-full border-gray-300 bg-neutral-50 rounded-md mb-2 px-2 py-1"
        placeholder="Price"
      />
      <input
        type="number"
        name="stock"
        value={editedProduct.stock}
        onChange={handleInputChange}
        className="block w-full border-gray-300 bg-neutral-50 rounded-md mb-2 px-2 py-1"
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
  );
};

export default EditForm;
