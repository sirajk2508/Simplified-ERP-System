import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/products/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/shared/Layout";
import OrdersPage from "./components/orders/OrdersPage";
import Calender from "./components/calender/Calender";

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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={approuter}>
      <div className=""></div>
    </RouterProvider>
  );
}

export default App;
