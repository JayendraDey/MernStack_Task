import { useState, useEffect } from "react";
import axios from "axios";

export default function CreatePost() {
  const [post, setPost] = useState({ title: "", content: "", user: "" });
  const [users, setUsers] = useState([]);


   const fetchUsers = async () => {
      try {
        const res = await axios.get("https://mernstack-task-35.onrender.com/users");
        setUsers(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Failed to fetch users:", error.message );
      }
    };

  useEffect(() => {
    fetchUsers();
  }, );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mernstack-task-35.onrender.com/posts", post);
      setPost({ title: "", content: "", user: "" });
      alert("Post created successfully");
    } catch (error) {
      console.error("Failed to create post:", error.message);
      alert("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Post</h3>

      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        required
      ></textarea>

      <select
        value={post.user}
        onChange={(e) => setPost({ ...post, user: e.target.value })}
        required
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Post</button>
    </form>
  );
}
