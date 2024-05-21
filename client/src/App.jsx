import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import './App.css'
import OurService from './pages/OurService'
import AboutUs from '../src/pages/AboutUs'

import Home from './pages/Home';
import ProtectedRoute from "./Components/ProtectedRoute";
import MomosProvider from './providers/MomosProvider';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/ourmenu",
      element: <OurService />
    },
    // {
    //   path:"/ourservice",
    //   element:<OurService/>
    // },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    }
  ])

  return (
    <>
      {/* <div>
        <MomosProvider>
          <RouterProvider router={router} />
          <Toaster />
        </MomosProvider>
      </div> */}

      <div>
        <AboutUs />
        {/* <OurService /> */}
      </div>
    </>
  )
}

export default App
