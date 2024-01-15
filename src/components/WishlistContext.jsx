import React, { createContext, useContext, useReducer } from "react";
 
const WishlistContext = createContext();
 
const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
 
  const addToWishlist = (book) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: book });
  };
 
  const removeFromWishlist = (bookId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: bookId });
  };
 
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
 
const useWishlist = () => {
    return useContext(WishlistContext);
  };
 
  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return [...state, action.payload];
      case "REMOVE_FROM_WISHLIST":
        return state.filter((item) => item._id !== action.payload);
      default:
        return state;
    }
  };

 
export { WishlistProvider, useWishlist };
 
