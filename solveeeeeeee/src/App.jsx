

import style from './App.module.css';
import Card from './components/Card';

const numbers = Array.from({ length: 70 }, (_, i) => i + 1);
console.log(numbers);


function App() {
   
return (
  <div className={style.app}>

  

       {
        numbers.map((num)=>{
          return (
            <Card id={num} img={`https://i.pravatar.cc/150?img=${num}`}/>

          )
           
      
        })
       }
         
    
         
  </div>
)

}

export default App;
