import React , { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Component/Home.jsx";
import Profile from "./Component/Profile.jsx";
import Cart from "./Component/Cart.jsx";
import Login from "./Component/Login.jsx";
import "./index.css";
import Logout from "./Component/Logout.jsx";
import Settings from "./Component/Settings.jsx";
import Food from "./Component/Food.jsx";
import ProductPage from "./Component/ProductPage.jsx";
import ThemeContext from "./Component/ThemeContext.jsx";
import AppStore from './Store/Store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Logout",
        element: <Logout></Logout>,
      },
      {
        path: "/Settings",
        element: <Settings></Settings>,
      },
      {
        path: "/Food",
        element: <Food></Food>,
      },
      {
        path: "product/:id",
        element: <ProductPage></ProductPage>,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={AppStore}>
    <ThemeContext>
    <RouterProvider router={router} />
    </ThemeContext>
    </Provider>
  </StrictMode>
);
