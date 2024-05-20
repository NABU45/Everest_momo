import React, { useEffect, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import useMomo from "../hooks/useMomo"

function ProtectedRoute() {
    const { momos } = useMomo();
    const navigate = useNavigate();
    useEffect(() =>{
        if(!momos) {
            navigate("/home");
        }
    }, []);
  return (
    <Outlet/>
  )
}

export default ProtectedRoute
