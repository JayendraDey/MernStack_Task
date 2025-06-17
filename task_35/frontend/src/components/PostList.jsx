import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);


   const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        alert("Failed to load posts");
      }
    };

  useEffect(() => {
   
    fetchPosts();
  },);

  return (
    <div>
      <h3>All Posts</h3>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <small>
              Author: {post.user?.name || "Unknown"} ({post.user?.email || "N/A"})
            </small>
          </div>
        ))
      )}
    </div>
  );
}
