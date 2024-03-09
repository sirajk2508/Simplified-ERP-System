import { PRODUCTS_DATA } from "../lib/constants/config";
import ProductList from "./ProductList";


const Products = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductList products={PRODUCTS_DATA} />
    </div>
  );
};

export default Products;
