import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HandleAfterLogin from './components/HandleAfterLogin';

function App() {
  const [isAtenticated, setIsAtenticated] = useState(false);

  const ProtectRout = ({ element }) => {
    return isAtenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <HandleAfterLogin setIsAtenticated={setIsAtenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectRout element={<Home />} />} />
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
