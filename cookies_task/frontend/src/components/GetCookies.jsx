import React, { useEffect, useState } from "react";
import axios from "axios";


const GetCookies = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  async function fetchData() {
    try {
      const res = await axios.get("https://mernstack-task-4-cookies.onrender.com/get", {
        withCredentials: true,
      });
      if(!res.data.message) {
        setData(res.data)
      }
    } catch (error) {
      console.error("Error getting cookies:", error);
      alert("Failed to get cookies");
    }
  }


    const handleDelete = async () => { 
    try {
      await axios.post(
        "https://mernstack-task-4-cookies.onrender.com/delete",
        {}, {withCredentials: true}
      );
      alert("Cookies deleted successfully");
       setData(null)  
     
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete cookies");
    }
  };












   
  useEffect(() => {
    fetchData();
  }, [visible ]);
  console.log(data);









  const handleButton = async () => {

    setVisible(!visible)
    
   
  };



  return (
    <div>
      <button
        onClick={handleButton}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        getCookies
      </button>


      {
        visible && <div>{data ? <div><h2>{data.name}</h2> <h2>{data.email}</h2></div> : <h2>There is no cookie</h2>}</div>
      }

       
            <button
        onClick={handleDelete}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        deleteCookies
      </button>
      
           
    </div>
  );
};

export default GetCookies;
