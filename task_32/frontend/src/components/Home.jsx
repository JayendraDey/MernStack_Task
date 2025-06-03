import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toastSuccess } from '../HandleToastify';
import { ToastContainer } from "react-toastify";

const Home = () => {
    const [loggedUser , setLoggedUser] = useState(); 
     const navigate = useNavigate()
    useEffect(()=>{
        setLoggedUser(localStorage.getItem('loggedInUser'))
        
    },[])

    const handleLogout = ()=>{
        localStorage.removeItem('loggedInUser')
        localStorage.removeItem('token')
        toastSuccess('Logout')
        setTimeout(() => {
           navigate("/login")
            
        }, 2000);
    }
  return (
    <div style={{backgroundColor:"black" , width:"100%" , height:"100vh"}}> 
        <h1 style={{color:"white" ,backgroundColor:"black" }}>welcome {loggedUser}</h1>
        <button   style={{
            padding: "10px",
            background: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",

            cursor: "pointer",
          }}  onClick={handleLogout}>Logout</button>
          <ToastContainer />
        
    </div>
  )
}

export default Home