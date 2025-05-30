import React, { useState } from "react";
import {ToastContainer} from "react-toastify"
import { toastError, toastSuccess } from "../HandleToastify";
import { NavLink, useNavigate } from "react-router-dom";

const URL = "http://localhost:9001/auth/signup"
const Signup = () => {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  

  const setInput = (e) => {
    const { name, value } = e.target;
    setInp((prev) => {
      return {
       ...prev , [name]: value,
      };
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const { name , email , password , confirmPassword} = inp   
    if(password !== confirmPassword) {
        return toastError('Both password are not same')
    }
    if(!name || !email || !password || !confirmPassword) {
        return toastError('All fields are required')
    }
    try {
        const response = await fetch(URL, {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(inp)
        } )
        const data = await response.json()
        if(data.success == false) {
            return toastError(data.message)
        }else {
            setTimeout(() => {
                navigate("/login")
                
            }, 3000);
            return toastSuccess(data.message)
        }
        

    } catch (error) {
        toastError(error)
        
    }



  }

  return (
    
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <form onSubmit={(e)=> handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "30px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 10px #ccc",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Signup</h2>

        <input
          placeholder="Name"
          value={inp.name}
          name="name"
          
          onChange={(e) => setInput(e)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          value={inp.email}
          placeholder="Email"
          name="email"
          onChange={(e) => setInput(e)}
          
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={inp.password}
          placeholder="Password"
          name="password"
          onChange={(e) => setInput(e)}
          
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={inp.confirmPassword}
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => setInput(e)}
          
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
        <p>already have account <NavLink to={'/login'} >Login</NavLink>   </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
