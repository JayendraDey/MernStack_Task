import logo from './logo.svg';
import './App.css';
import SetCookies from './components/SetCookies';
import GetCookies from './components/GetCookies';
import Updatecookies from './components/Updatecookies';
import HandleHttp from './components/HandleHttp';


function App() {
  return (
    <div className="App">
      <HandleHttp/>
      <div className="container">
        <SetCookies/>
        <GetCookies/>
        <Updatecookies/>
      
      </div>

      
      
      

    </div>
  );
}

export default App;
