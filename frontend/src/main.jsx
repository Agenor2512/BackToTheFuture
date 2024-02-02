import React from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./styles/App.css";

import { CartProvider } from "./contexts/CartContext.jsx";

import ThermesCatalog from "./pages/ThermesCatalog.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ThermesCatalog />,
        loader: () =>
          axios.get("http://localhost:8000/thermes").then((res) => res.data),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () =>
          axios.get("http://localhost:8000/thermes").then((res) => res.data),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
