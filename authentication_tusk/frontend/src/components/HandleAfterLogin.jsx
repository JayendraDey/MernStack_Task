import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HandleAfterLogin = ({setIsAtenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')) {
            setIsAtenticated(true);
            if(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
                navigate('/home' , {replace : false})
            }
        }

    },[location , navigate , setIsAtenticated])
  return (
    null
  )
}

export default HandleAfterLogin