import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../HandleToastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; 

// const URL = "http://localhost:9001/auth/signup";

const URL = "https://mernstack-task-upr4.onrender.com/auth/signup"

const Signup = () => {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const setInput = (e) => {
    const { name, value } = e.target;
    setInp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = inp;

    if (password !== confirmPassword) {
      return toastError("Both passwords are not the same");
    }

    if (!name || !email || !password || !confirmPassword) {
      return toastError("All fields are required");
    }

    try {
      const response = await axios.post(URL, inp, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { success, message } = response.data;

      if (!success) {
        return toastError(message);
      }

      toastSuccess(message);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      toastError(errorMsg);
    }
  };

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
      <form
        onSubmit={handleSubmit}
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
          onChange={setInput}
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
          onChange={setInput}
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
          onChange={setInput}
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
          onChange={setInput}
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
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
