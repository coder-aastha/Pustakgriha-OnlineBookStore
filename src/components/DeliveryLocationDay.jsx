//DeliveryLocation.jsx
// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { FaMinus } from 'react-icons/fa6';
import { MdOutlineAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';

const DeliveryLocationDay = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

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
    const response = await axios.post('/addToCart', {
      quantity,
      imageURL: book.imageURL,
      bookTitle: book.title,
    });

    if (response.status === 200) {
      console.log('Item added to cart successfully');
    } else {
      console.error('Failed to add item to cart');
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};


  return (
    <div className="mainDeliveryLocation">
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
