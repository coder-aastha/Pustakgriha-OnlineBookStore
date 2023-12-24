//DeliveryLocation.jsx
// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { FaMinus } from 'react-icons/fa6';
import { MdOutlineAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';

const DeliveryLocationDay = ({ book }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = async () => {
    try {
      // Assuming you have an API endpoint to handle adding items to the cart
      const response = await axios.post('/addToCart', {
        // bookId: book.id, // Assuming your book object has an 'id' property
        quantity: quantity,
        // price: price, // Assuming the book price is relevant for the cart
        imageURL: book.imageURL,
        bookTitle: book.title, // Assuming the book title is relevant for the cart
      });
        // Add other book information as needed
    

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        // Navigate to the cart page or show a success message
        navigate("/cart");
      } else {
        // Handle errors, maybe show a notification to the user
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Return JSX for the DeliveryLocationDay component
  return (
    <div className="mainDeliveryLocation">
      {/* ... (other JSX) */}
      <div className="quantityPrice">
        {/* <h6>Rs. {book.price}</h6> */}
        <div className="quantity">
          <span className="addSub" onClick={decreaseQuantity}>
            <FaMinus />
          </span>
          <h6 className="quantityText">QTY: {quantity}</h6>
          <span className="addSub" onClick={increaseQuantity}>
            <MdOutlineAdd />
          </span>
        </div>
      </div>
      <div className="addToCartDelivery">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default DeliveryLocationDay;
