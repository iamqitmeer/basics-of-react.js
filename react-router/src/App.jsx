import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Screens/Portfolio";
import Home from "./Screens/Home";
import AppLayout from "./Componets/AppLayout";
import About from "./Screens/About";
import Contact from "./Screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
