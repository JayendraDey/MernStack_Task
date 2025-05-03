
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp.jsx';
import { DashBord } from './components/DashBord.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashBord' element={<DashBord/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
