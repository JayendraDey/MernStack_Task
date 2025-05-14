

import style from './App.module.css';
import Card from './components/Card';
import useFetch from './customHooks';

const numbers = Array.from({ length: 70 }, (_, i) => i + 1);

function App() {
 
  const [fetchData , someError] = useFetch("https://api.escuelajs.co/api/v1/products")

  if(fetchData) {
    console.log(fetchData[0]);
     
  }
  


return (
  <div className={style.app}>
   
 

       {
        (someError)?  <h1 style={{color:"white",width:"100%" , height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>Error:Failed to fetch</h1>  :      
          fetchData?  fetchData.map((item)=>{
           return (
             <Card key={item.id} id={item.id} img={item.images[0]} title={item.title}/>
               
     
           )
         }) : <h1  style={{color:"white",width:"100%" , height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>Loding...</h1>
         
              
               
       }




         
  </div>
)

}

export default App;
