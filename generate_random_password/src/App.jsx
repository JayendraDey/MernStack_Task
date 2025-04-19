import { useCallback, useEffect, useState  , useRef} from "react";


function App() {
    const [length , setLength] = useState(8)
    const [numberAllowerd , SetNumberAllowerd] = useState(false)
    const [charAllowerd  , setCharAllowred] = useState(false)
    const [password , setPassword] = useState()

    //use ref hook ...
    const passwordRef = useRef(null)


    const copyPasswordClipBord = useCallback(()=> {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)

    } , [password])

    

    const passwordGenerator = useCallback(()=> {
      let pass ="";

      let str = 'ABCDEFGHIJKLMNObcdefghijklmnopqrstuvwxyz';

      if(numberAllowerd)  str += '0123456789';
      if(charAllowerd)    str += '!@#$%^&*()_+=-`~":;?/><,.|';

      
      


      for(let i = 1 ; i <= length ; i++) {

        let char = Math.floor(Math.random()* str.length +1)

        console.log(char);
        

        pass += str.charAt(char)

      }

      console.log("pass" , pass);
      

      setPassword(pass)

      
    

    } , [length , numberAllowerd , charAllowerd , setPassword])

   
   useEffect(()=> {
      passwordGenerator()

   } , [length , numberAllowerd , charAllowerd , passwordGenerator] )

    


  return (
    <div >
    <h1>Password Generator</h1>
    <input type="text" ref={passwordRef}  value={password} readOnly/>
    <button onClick={copyPasswordClipBord}>Copy</button>

    <div>
      <input type="range"  min={6} onChange={(e)=> setLength(e.target.value)}  max={50} value={length}/>
      <label htmlFor="">length : {length}</label>
      <br />
      <br />
      <input type="checkbox"  onChange={()=> SetNumberAllowerd((prev)=> !prev)} />

      <label htmlFor="">Number allowerd</label>

      <br />
      <br />
      <br />
      <br />

    <input type="checkbox"  onChange={()=> setCharAllowred((prev)=> !prev)} />

    <label htmlFor="">char Allowerd</label>
    </div>



    
      

           
    </div>
  );
}

export default App;
