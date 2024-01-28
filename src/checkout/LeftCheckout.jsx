import React from 'react';
import './Checkout.css';

function LeftCheckout({ imageURL,bookName, totalPrice, calculateShippingCost, calculateTotalCost }) {
  return (
    <div className='checkout_left'>
      <div className='bookDetail_checkout'>
      <div className="checkout-image">
        <img src={imageURL} alt=" " className="checkoutbookimage" />
        </div>
        <div className="checkout-info">
        <h2 className='checkoutbookname'>Book Name: {bookName}</h2>
        <h2 className='checkoutsubtotal'>Subtotal: Rs {totalPrice}</h2>
        <h2 className='checkoutshippingcost'>Shipping: {calculateShippingCost() === 0 ? 'Free' : `Rs ${calculateShippingCost()}`}</h2>
        <h2 className='checkouttotal'>Total: Rs {calculateTotalCost()}</h2>
        </div>
      </div>
    </div>
  );
}


export default LeftCheckout;



