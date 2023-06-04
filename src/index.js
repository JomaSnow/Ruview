import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Admin from "./pages/Admin";
import { SolidProvider } from "./hooks/SolidProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SolidProvider>
      <RouterProvider router={router} />
    </SolidProvider>
  </React.StrictMode>
);
