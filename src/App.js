import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/shared/Layout";
import Products from "./components/Products";


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
