import logo from './logo.svg';
import './App.css';
import SetCookies from './components/SetCookies';
import GetCookies from './components/GetCookies';
import Updatecookies from './components/Updatecookies';


function App() {
  return (
    <div className="App">
      <div className="container">
        <SetCookies/>
        <GetCookies/>
        <Updatecookies/>
      
      </div>
      
      

    </div>
  );
}

export default App;
