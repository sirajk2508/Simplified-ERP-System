import { Link } from "react-router-dom";
import classNames from "classnames";
import { popularProducts } from "../lib/constants/config";

const PopularProducts = () => {
  return (
    <div className="w-[20rem] bg-white p-4 mr-4 rounded-sm border border-gray-200 h-[17rem] overflow-y-scroll">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  product.product_stock === 0
                    ? "text-red-500"
                    : product.product_stock > 50
                    ? "text-green-500"
                    : "text-orange-500",
                  "text-xs font-medium"
                )}
              >
                {product.product_stock === 0
                  ? "Out of Stock"
                  : product.product_stock + " in Stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
