import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const ProductCard = ({ product, handleDelete, handleEdit }) => {
  return (
    <>
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-700 mt-2">Price: {product.price}</p>
      <p className="text-gray-700">Stock: {product.stock}</p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleDelete}
        >
          <FaRegTrashAlt />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleEdit}
        >
          <MdModeEdit/>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
