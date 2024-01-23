import React, { createContext, useContext, useReducer } from "react";
 
const CartContext = createContext();
 
 
const initialState = {
  cart: [],
  totalQuantity: 0,
};
 
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((book) => book._id !== action.payload),
        totalQuantity: state.totalQuantity - 1,
      };
    default:
      return state;
  }
};
 
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
 
 
  const addToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };
 
  const removeFromCart = (bookId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: bookId });
  };
 
  return (
    <CartContext.Provider value={{ ...cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
 
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
 
export { CartProvider, useCart };