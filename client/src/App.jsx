import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import './App.css'
import Home from './pages/Home';
import ProtectedRoute from "./Components/ProtectedRoute";
import MomosProvider  from './providers/MomosProvider';
import AboutUs from './pages/AboutUs';
import OurManu from './pages/OurManu';


function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
     path:"/aboutus",
     element:<AboutUs/>
  },
  {
    path:"/ourManu",
    element:<OurManu />
  },
  // {
  //   path:"/ourservice",
  //   element:<OurService/>
  // },
  {
    path:"/",
    element:<ProtectedRoute/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]
  }
])

  return (

<div>
  <MomosProvider>
    <RouterProvider router={router}/>
    <Toaster/>
  </MomosProvider>
</div>

  )
}

export default App
