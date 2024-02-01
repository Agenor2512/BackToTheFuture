import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { ThermesProvider } from './contexts/ThermeContext.jsx';
// import { getAll } from "./services/panier.js";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./styles/App.css";

import ThermesCatalog from "./components/ThermesCatalog.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ThermesCatalog />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
