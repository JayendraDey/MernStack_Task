import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastSuccess, toastError } from '../HandleToastify';
import { ToastContainer } from "react-toastify";
import axios from 'axios';

const URL = "https://mernstack-task-33-backend.onrender.com";
  const url2  = "http://localhost:5500"

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${URL}/auth/check`, {
          withCredentials: true,
        });
           console.log(response)
        const { success, user } = response.data;
        if (success) {
          setLoggedUser(user.name || user.email); // Show name or fallback to email
        } else {
          navigate("/login");
        }
      } catch (error) {
        toastError("Session expired or unauthorized");
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get(`${url2}/auth/logout`, {
        withCredentials: true,
      });

      toastSuccess("Logout successful");
      localStorage.removeItem("loggedInUser"); // optional cleanup
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toastError("Logout failed");
    }
  };

  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "50px" }}>
        {loggedUser ? `Welcome ${loggedUser}` : "Loading..."}
      </h1>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
