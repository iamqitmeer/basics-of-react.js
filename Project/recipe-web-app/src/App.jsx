import React from "react";
import Home from "./screens/Home";
import Favourite from "./screens/Favourite.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetails from "./screens/RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/:id",
    element: <RecipeDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
