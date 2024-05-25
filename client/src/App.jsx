import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css'
import Home from './pages/Home';
import ProtectedRoute from "./Components/ProtectedRoute";
import MomosProvider  from './providers/MomosProvider';
import OurManu from './pages/OurManu';
import AboutUs from './pages/AboutUs';
import AllergyAdvice from './pages/AllergyAdvice';
import OurService from './pages/OurService';
import ContactUs from './pages/ContactUs';


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
    path:"/ourmanu",
    element:<OurManu/>
  },
  {
    path:"/ourservice",
    element:<OurService/>
  },

  {
    path: "/advice",
    element: <AllergyAdvice />
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  },
  
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
