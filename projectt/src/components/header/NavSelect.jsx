import React, { useState } from "react";

import "./NavSelect.css";

export const NavSelect = ({ openNavCtagory, setDisplayCategoryName ,setOpenNavCtagory }) => {
  const [isIndex , setIndex] = useState()
  
  const categList = ["Milk & Dairies",
    "Wines & Drinks",
    "Clothings & Beauty",
    "freash seafood",
    "Pet foods & Toys",
    "Fastfood",
    "Baking Meterials",
    "Vegitables",
    "freash Fruit",
    "Bead and Juice",
  ]

  const [category , setCategory] = useState(categList)

  function clickOnLi( CategoryName){

    setDisplayCategoryName(CategoryName)
    setIndex(CategoryName)
    setOpenNavCtagory(!openNavCtagory)
    setCategory(categList)
    
    
  }

 
  

  

   

  function handleInput(e){
       
    const key = e.target.value.toLowerCase();
    console.log(key);
    setIndex("")
    
    const cList = categList.filter((item)=>{
        return  item.toLowerCase().includes(key)

    })

    setCategory(cList)

    
    
    

  }

  return (
    <>
      {openNavCtagory && (
        <div className="nav-select">
          <div className="dropDown-inp">
            <input type="text" onChange={handleInput}  name="" id="" />
          </div>
          <div className="categoryList">
            <ul>
              {category?.map((item, indx) => {
                return (
                  <li className={isIndex===item?  "darkList" : ""}  onClick={() =>clickOnLi(item)}  >{item}</li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
