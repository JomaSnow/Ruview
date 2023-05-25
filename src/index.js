import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { SessionProvider } from "@inrupt/solid-ui-react";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Admin from "./pages/Admin";

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
    {/* <SessionProvider> */}
      <RouterProvider router={router} />
    {/* </SessionProvider> */}
  </React.StrictMode>
);
