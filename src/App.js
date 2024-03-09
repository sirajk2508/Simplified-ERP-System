import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/ordersAndProducts/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/shared/Layout";

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
        path: "/",
        element: <Dashboard />,
        index: true
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
