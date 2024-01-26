import React, { useEffect, useState } from "react";
import './Payment.css';
import Esewa from "../images/Esewa.png";
import Khalti1 from "../images/Khalti1.png";
import QR_code from "../images/QRcode.jpg";
import QRcode from "../images/QRcode2.jpg";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate= useNavigate();
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(() => {
    return localStorage.getItem('showPayment') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('selectedPaymentOption', selectedPaymentOption);
  }, [selectedPaymentOption]);

  const handleContinue =()=>{
    navigate("/")
  }

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };
  return (
    <div className="paymentMain">
      <h2>Thank you for ordering!!</h2>
      <div className="receipt_container">
        <h4>Order details</h4>
        <div className="receiptmain_container">
        <p>Contact information</p>
        <a>email</a>
        </div>
      </div>
       <h4>Choose any to pay:</h4>
    <div className="payment-container">
     
      <div className="Payment_Method1" onClick={() => handlePaymentOptionChange('esewa')}>
        <img src={Esewa} alt="Esewa" />
      </div>
      <div className="Payment_Method2" onClick={() => handlePaymentOptionChange('Khalti')}>
        <img src={Khalti1} alt="Khalti" />
      </div>
    </div>
    <div className="QR_Container">
      {selectedPaymentOption === 'esewa' && (
        <div className='QR'>
          <img src={QR_code} alt="QR_code" />
        </div>
      )}
      </div>
      <div className="QR_Container">
      {selectedPaymentOption === 'Khalti' && (
        <div className='QR'>
          <img src={QRcode} alt="QRcode2" />
        </div>
      )}
      </div>
      <div className="Continue" onClick={()=>handleContinue()}>
        <p>Continue Shopping</p>
      </div>
    </div>

  );
}

export default Payment;
