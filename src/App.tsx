import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { CartContextProvider } from "./context/cart.context";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Layout } from "./pages/layout";
import { Product } from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
