import React from "react";
import { useCart } from "./CartContext";
 
const ShoppingCart = () => {
  const { cart, totalQuantity, removeFromCart } = useCart();
 
  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
  };
 
  const totalPrice = cart.reduce((acc, book) => acc + book.price * book.quantity, 0);
 
 
  return (
    <div>
      <h2>Your Shopping Cart</h2>
 
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((book) => (
            <div key={book._id} className="cart-item">
              <p>{book.bookTitle}</p>
              <p>Price: Rs {book.price}</p>
              <p>Quantity: {book.quantity}</p>
              <p>Total: Rs {book.price * book. quantity}</p>
              <button onClick={() => handleRemoveFromCart(book._id)}>Remove</button>
            </div>
          ))}
          <p>Total Price:Rs {totalPrice}</p>
        </div>
      )}
 
     
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
};
 
export default ShoppingCart;