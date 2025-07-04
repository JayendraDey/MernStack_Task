import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState(null); 

  const fetchFiles = async () => {
    const res = await axios.get("https://mernstack-task-36-backend.onrender.com/files");
    setFiles(res.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);

    await axios.post("https://mernstack-task-36-backend.onrender.com/upload", formData);
    fetchFiles();
    setSelectedFile(null);
  };

  const handleImageClick = (filePath) => {
    setPreviewImage(`https://mernstack-task-36-backend.onrender.com/${filePath}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>File Upload</h2>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Uploaded Images</h3>
      <ul>
        
        {files.map((file) => (
          <li key={file._id} style={{ cursor: "pointer", color: "blue" }} onClick={() => handleImageClick(file.path)}>
            {file.filename}
            
          </li>
        ))}
      </ul>

      <p style={{color:"red"}}>Only photo can visible</p>
      {previewImage && (
        <div>
          <h4>view image</h4>
          <img src={previewImage} width="300" height="300" alt="Preview" style={{ border: "1px solid #ccc" }} />
        </div>
      )}
    </div>
  );
};

export default App;
