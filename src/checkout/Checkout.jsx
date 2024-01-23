import React, { useState, useEffect } from 'react';
import './Checkout.css';
import LeftCheckout from './LeftCheckout';
import RightCheckout from './RightCheckout';
import Payment from './Payment';
import FooterUI from "../components/FooterUI";
import Navbar from "../components/Navbar";

function Checkout() {
  const [showPayment, setShowPayment] = useState(
  //   () => {
  //   return localStorage.getItem('showPayment') === 'true';
  // }
  );

  const handleCompleteOrder = () => {
    setShowPayment(true);
  };

  // useEffect(() => {
  //   // Save the showPayment value to localStorage whenever it changes
  //   localStorage.setItem('showPayment', showPayment.toString());
  // }, [showPayment]);

  return (
    <>
    <Navbar/>
    <div className='checkout_mainContainer'>
      <LeftCheckout />
      {showPayment ? (
        <Payment />
      ) : (
        <RightCheckout
          onCompleteOrder={handleCompleteOrder}
          // showPayment={showPayment}
        />
      )}
    </div>
    <FooterUI/>
    </>
  );
}

export default Checkout;
