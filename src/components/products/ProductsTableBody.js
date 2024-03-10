import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const ProductsTableBody = ({paginatedProducts}) => {
  return (
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
              <AiOutlineDelete fontSize={18} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductsTableBody;
