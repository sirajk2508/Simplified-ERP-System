import OrdersTable from "./OrdersTable";

const OrdersPage = () => {
  return (
    <div className="m-2 p-2 mb-10 my-3 md:h-[91vh] lg:h-[89vh]">
      <h1 className="md:text-3xl text-2xl font-bold mb-4 text-gray-700 text-center md:mb-8">Orders Page</h1>
      <OrdersTable/>
    </div>
  );
};

export default OrdersPage;
