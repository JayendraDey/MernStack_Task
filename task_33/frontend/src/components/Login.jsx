import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../HandleToastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


const URL = "http://localhost:5500/auth/login";

const Login = () => {
  const [inp, setInp] = useState({
    email: "",
    password: "",
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
    const { email, password } = inp;

    if (!email || !password) {
      return toastError("All fields are required");
    }

    try {
      const response = await axios.post(URL, inp, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const { success, message, name } = response.data;

      if (!success) {
        return toastError(message);
      }

      // Store non-sensitive data only (no token)
      localStorage.setItem("loggedInUser", name);
      toastSuccess(message);

      setTimeout(() => {
        navigate("/home");
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
        backgroundColor: "black",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "30px",
          background: "black",
          borderRadius: "8px",
          boxShadow: "0 0 10px white",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>Login</h2>

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
            backgroundColor: "black",
            color: "white",
          }}
        />
        <input
          type="password"
          value={inp.password}
          placeholder="Password"
          name="password"
          onChange={setInput}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "black",
            color: "white",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "black",
            boxShadow: "0 0 2px white",
            color: "white",
          }}
        >
          Login
        </button>
        <p style={{ color: "white" }}>
          Create new account <NavLink to="/signup">signup</NavLink>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
