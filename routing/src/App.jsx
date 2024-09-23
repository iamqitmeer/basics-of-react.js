import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/AboutUs'
import Contact from './Screens/ContactUs'
import AppLayout from './Components/AppLayout'
import ErrorPage from './Screens/ErrorPage'
import Product from './Screens/Products'
import Login from './Screens/Login'
import Register from './Screens/Register'
import getProducts from './api/getProducts'
import ProductDetails from './Screens/ProductDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        }
        , {
          path: "/product",
          element: <Product />,
          loader: getProducts,
        }, {
          path: "/product/:id",
          element: <ProductDetails />,
          loader: getProducts,
        }
        , {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }

  ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App