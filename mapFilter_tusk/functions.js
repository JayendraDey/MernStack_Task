export function displayCards(arr, parentDiv) {
  arr.map((item, i) => {
    let div = document.createElement("div");
    div.className = "student_card";
    div.innerText = `Student Name : ${item.name}  \n
     Marks :  ${item.marks}  \n
     Class :   ${item.class} \n
     Address  ${item.address}
      `;
    parentDiv.append(div);
  });
}

export function getinputValueSearch(arr,inp , searchButton , parentDiv ,search_data) {

    let data = ""
  inp.addEventListener("input", (e) => {
    data =e.target.value
  });
  searchButton.addEventListener('click' , ()=>{
    let filteredData = arr.filter((item) => item.name.toLowerCase().startsWith(data.toLowerCase()))

    console.log(arr);
    parentDiv.innerText = ""
    search_data.innerText = `Search Reasult for ${data}...`
    search_data.style.display = "flex";
    if(filteredData.length == 0) {
        parentDiv.style.color = ""
        parentDiv.style.color = "red"
        parentDiv.innerText = "no such data in this name"
    }else {
        parentDiv.style.color = ""
    }
    
    displayCards(filteredData, parentDiv)
    
  })

   

}
