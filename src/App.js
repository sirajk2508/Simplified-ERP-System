import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/products/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/shared/Layout";
import OrdersPage from "./components/orders/OrdersPage";
import Calender from "./components/calender/Calender";
import Transactions from "./components/dummyComponents/Transactions";
import Messages from "./components/dummyComponents/Messages";
import Settings from "./components/dummyComponents/Settings";
import Support from "./components/dummyComponents/Support";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <OrdersPage/>
      },
      {
        path: "/",
        element: <Dashboard />,
        index: true
      },
      {
        path: "/calender",
        element: <Calender/>
      },
      {
        path: "/transactions",
        element: <Transactions/>
      },
      {
        path: "/messages",
        element: <Messages/>,
      },
      {
        path: "/settings",
        element: <Settings/>
      },
      {
        path: "/support",
        element: <Support/>
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={approuter}>
      <div className="bg-gray-100"></div>
    </RouterProvider>
  );
}

export default App;
