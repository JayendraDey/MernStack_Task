import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HandleAfterLogin from './components/HandleAfterLogin';

function App() {
  const [isAtenticated, setIsAtenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // ✅ Added

  const ProtectRout = ({ element }) => {
    if (!authChecked) return <div style={{ color: "white" }}>Checking auth...</div>;
    return isAtenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <HandleAfterLogin setIsAtenticated={setIsAtenticated} setAuthChecked={setAuthChecked} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectRout element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
