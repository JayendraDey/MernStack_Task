import { arr } from "./data.js";
import { displayCards, getinputValueSearch } from "./functions.js";

const cards_div = document.querySelector(".studentCard_div")
cards_div.className = "studentCard_div"
const search_inp = document.getElementById("search_inp")
const search_btn = document.getElementById("search_btn")
const search_data = document.querySelector(".search_data")
displayCards(arr, cards_div)
getinputValueSearch(arr , search_inp , search_btn , cards_div ,search_data)













