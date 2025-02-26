import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ErrorPage from "./Pages/404.jsx";
import DetailProductPage from "./Pages/detailProductPage.jsx";
import CategoryPage from "./Pages/categoryPage.jsx";
import SearchPage from "./Pages/searchPage.jsx";
import LoginPage from "./Pages/loginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/category/:category",
    element: <CategoryPage />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
