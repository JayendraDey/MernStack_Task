const greeting_text = document.getElementById('Greeting_text')
const colors = document.getElementById('colors_div')



let access ;
let inp = "";
const greet_inp = document.getElementById('greet_inp')

// greet_inp.addEventListener("input" , (e)=>{
  
//     inp = e.target.value
//     console.log(inp);
    
// })







const greet_btn = document.getElementById('greet_btn')

greet_btn.addEventListener('click' , ()=> {
      
    if(greet_inp.value === "") {
        alert('If you want to change your name please enter your new name');
        return
    }


    greeting_text.innerText = `Hello, ${greet_inp.value}`

    greet_inp.value = ""

})


const ggg= [...colors.children]

ggg.map((item)=> {
    item.addEventListener('click' , ()=>{
       switch(item.id){
          case "red"  :  item.style.backgroundColor = "red";
          item.style.color = "white";
          break;

          case "blue" : item.style.backgroundColor = "blue";
          item.style.color = "white";
          break;

          case "green" : item.style.backgroundColor = "green";
          item.style.color = "white";
          break;

          case "yellow" : item.style.backgroundColor = "yellow";
          

          default : return
           
       }
        
    })
    
})