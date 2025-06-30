import { ActionType } from "../constant/ActionTypes";

const initialStateForSetProduct = {
  products: [],
};

const initialStateForChooseProduct = {
  product: [],
};

const initialForCart = [];


export const productReducer = (state = initialStateForSetProduct, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export const chooseProductReducer = (
  state = initialStateForChooseProduct,
  action
) => {
  switch (action.type) {
    case ActionType.SELECTED_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export const add_cart = (state = initialForCart, action) => {
  try {
    switch (action.type) {
        case ActionType.ADD_TO_CART:
          const exists = state.find((item) => item.id === action.payload.id);
          if (!exists)  return [...state, action.payload];
             return state;


             case ActionType.DELETE_CART : 
             return state.filter((item)=> item.id !== action.payload)
        default:
          return state;
      }
    
  } catch (error) {
     console.log("errror :" ,error);
     
    
  }
};
