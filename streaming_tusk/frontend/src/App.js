// App.js
import React, { useEffect, useState } from "react";
import VideoPlay from "./components/VideoPlay";
import "./App.css";

const videos = [
  { id: "Animal", title: "Animal" , img :"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: "Cornelius", title: "Cornelius" ,img : "https://i.pinimg.com/originals/97/2c/65/972c65eaf868a9848b1fe127e8a51e0e.jpg" },
  { id: "Brasuca", title: "Brasuca" , img : "https://i.ytimg.com/vi/zkRFYeePPxI/maxresdefault.jpg" },
  { id: "Musical", title: "Musical" , img : "https://i1.sndcdn.com/avatars-000203430433-2jhgvy-t500x500.jpg" },
  { id: "Franchise", title: "Franchise" , img: "https://th.bing.com/th/id/R.a9e712b7d25e0d1e8f22df1d8b58f191?rik=%2fBJ4jQaYiJNz%2fQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9ip%2fo47%2f9ipo47eeT.jpg&ehk=pF2PNWX5OomS820QF5n6WAp1Ou9YLfaaNXvWeQmQwXs%3d&risl=&pid=ImgRaw&r=0" },
  { id: "Rigs", title: "Rigs"  , img: "https://assets-global.website-files.com/5e6b63ac3b6e2522d1889f4a/63b58e57410063f94969da04_62d6b9d3edce25eadf40a8f2_625d301ea32d953999a1f595_Rigify_01%2520(1).jpeg"},
  { id: "CERVIDEO", title: "CERVIDEO" , img : "https://th.bing.com/th/id/OIP.fUxTeOv_KScwt1Gz0ho8kgHaEo?rs=1&pid=ImgDetMain" },
  { id: "ECCO", title: "ECCO"  , img : "https://images.squarespace-cdn.com/content/v1/5b7c56e255b02c683659fe43/060970be-cb93-4867-9543-db9796a04020/GettyImages-671260408.jpg"},
  { id: "Halloween", title: "Halloween" , img : "https://static.vecteezy.com/system/resources/previews/008/822/710/original/pumpkin-witch-halloween-cartoon-colored-clipart-free-vector.jpg" },
  { id: "Kids", title: "Kids", img : "https://i.ytimg.com/vi/Bps8sP0GWZM/maxresdefault.jpg" },
  { id: "Run", title: "Run"  , img : "https://static.vecteezy.com/system/resources/previews/019/861/831/original/running-boy-cartoon-character-free-vector.jpg"},
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm , setSearchTerm] = useState("")
   
 
   

   const  filteredVideos = videos.filter((item)=>item.title.toLowerCase().startsWith(searchTerm.toLowerCase()))
 
  return (
    <div className="app">
      <div className="app-header">
        <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder="Search Videos" name="" id="" />
      </div>
     
      <section className="video-gallery">
        {filteredVideos?.map(({ id, title , img }) => (
          <div
            key={id}
            className="video-thumbnail"
            onClick={() => setSelectedVideo(id)}
            title={title}
          >
           
            <img
              src={img? img : ""}
              alt={title}
            />
            <div className="video-title">{title}</div>
          </div>
        ))}
      </section>

      
      {selectedVideo && (
        <div className="video-overlay" onClick={() => setSelectedVideo(null)}>
          <div
            className="video-player-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close Video"
            >
              &times;
            </button>
            <VideoPlay videoId={selectedVideo}  setSelectedVideo = {setSelectedVideo}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;