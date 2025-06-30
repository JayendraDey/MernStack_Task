import { type } from "@testing-library/user-event/dist/type"
import { ActionType } from "../constant/ActionTypes"


export const setProducts = (products)=>{
    return {
        type : ActionType.SET_PRODUCT,
        payload : products

    }
}

export const selectedProducts = (product)=>{
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload : product

    }
}



export const add_to_cart = (eachProduct) =>{
    return {
        type : ActionType.ADD_TO_CART,
        payload : eachProduct
    }
}


export const delete_from_cart = (id) =>{
    return {
        type : ActionType.DELETE_CART,
        payload : id
    }
}
