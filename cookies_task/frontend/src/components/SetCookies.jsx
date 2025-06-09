import React, { useState } from "react";
import axios from "axios";

const SetCookies = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mernstack-task-4-cookies.onrender.com/set", formData, {
        withCredentials: true,
      });

      alert(res.data.message || "Cookies set successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error setting cookies:", error);
      alert("Failed to set cookies");
    }
  };

  return (
    <div style={{ padding: "90px", maxWidth: "300px" }}>
      <h2>Set Cookies</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <br />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            fontWeight: "600",
            backgroundColor: "lightgreen",
            border: "none",
            outline: "none",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetCookies;
