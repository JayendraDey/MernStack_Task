import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mernstack-task-35.onrender.com/users", user);
      alert("User created successfully");
      setUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating user:", error.message);
      alert("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User</h3>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}
