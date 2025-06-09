import React, { useState } from "react";
import axios from "axios";

const Updatecookies = () => {
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
      const res = await axios.post("http://localhost:9000/update", formData, {
        withCredentials: true,
      });
      alert(res.data.message || "Cookie updated");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error updating cookies:", error);
      alert("Failed to update cookie or you do not have cookies to update");
    }
  };

  return (
    <div>
      <h2>Update Cookie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Update Cookie
        </button>
      </form>
    </div>
  );
};

export default Updatecookies;
