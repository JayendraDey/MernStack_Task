import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../HandleToastify";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Axios imported

// const URL = "http://localhost:9001/auth/login";

const URL = "https://mernstack-task-upr4.onrender.com/auth/login"

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
      });

      const { success, message, jwtToken, name } = response.data;

      if (!success) {
        return toastError(message);
      }

      localStorage.setItem("token", jwtToken);
      localStorage.setItem("loggedInUser", name);
      toastSuccess(message);

      setTimeout(() => {
        navigate("/home");
      }, 3000);

    } catch (error) {
      // Axios error handling
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
        <h2 style={{ textAlign: "center" }}>Login</h2>

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
          Login
        </button>
        <p>
          Create new account <NavLink to="/signup">signup</NavLink>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
