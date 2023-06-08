import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Admin from "./pages/Admin";
import { SolidProvider } from "./hooks/SolidProvider";
import { MealsProvider } from "./hooks/MealsProvider";
import { CardapioProvider } from "./hooks/CardapioProvider";
import { MealsOfDayProvider } from "./hooks/MealsOfDayProvider";
import { PodMealsProvider } from "./hooks/PodMealsProvider";
import { PodFriendsProvider } from "./hooks/PodFriendsProvider";

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
      <MealsProvider>
        <CardapioProvider>
          <PodMealsProvider>
            <MealsOfDayProvider>
              <PodFriendsProvider>
                <RouterProvider router={router} />
              </PodFriendsProvider>
            </MealsOfDayProvider>
          </PodMealsProvider>
        </CardapioProvider>
      </MealsProvider>
    </SolidProvider>
  </React.StrictMode>
);
