import React, { useEffect, useState } from "react";
import './Payment.css';
import Esewa from "../images/Esewa.png";
import Khalti1 from "../images/Khalti1.png";
import QR_code from "../images/QRcode.jpg";
import QRcode from "../images/QRcode2.jpg";

function Payment() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(() => {
    return localStorage.getItem('showPayment') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('selectedPaymentOption', selectedPaymentOption);
  }, [selectedPaymentOption]);

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };
  return (
    <div className="paymentMain">
       <h3>Choose any to pay:</h3>
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
    </div>

  );
}

export default Payment;
