import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://mernstack-task-4-cookies.onrender.com";
const routes = [
  { path: "/success", label: "200 OK" },
  { path: "/create", label: "201 Created", method: "POST" },
  { path: "/bad-request", label: "400 Bad Request" },
  { path: "/not-found", label: "404 Not Found" },
  { path: "/server-error", label: "500 Internal Server Error" },
];

const HandleHttp = () => {
  const [view, setView] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (view) {
      const timer = setTimeout(() => {
        setView(false)
        setMessage("")
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const callRoute = async (path, method = "GET") => {
    try {
      const res =
        method === "POST"
          ? await axios.post(`${URL}${path}`, { name: "jay" })
          : await axios.get(`${URL}${path}`);

      console.log(`${res.status}:`, res.data);
      //   alert(`${res.status}: ${JSON.stringify(res.data)}`);
      setMessage(`${res.status} , ${res.data.message}`);
    } catch (err) {
      if (err.response) {
        console.log(` ${err.response.status}:`, err.response.data);
        // alert(` ${err.response.status}: ${JSON.stringify(err.response.data)}`);
        setMessage(`${err.response.status}`);
      } else {
        console.log(" Error:", err.message);
        // alert(` Error: ${err.message}`);
        setMessage(`${err.message}`);
      }
    }
  };
  return (
    <div >
      {routes.map((route) => (
        <div key={route.path}   >
          <button
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "10px ",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop : "5px",
              marginLeft : "20px",
              
            }}
            
            onClick={() => {
              callRoute(route.path, route.method);
              setView(true);
            }}
          >
            {route.label}
          </button>
          
        </div>
      ))}
      <h3>{view ? message : ""}</h3>
    </div>
  );
};

export default HandleHttp;
