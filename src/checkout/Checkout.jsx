import React, { useState, useEffect } from 'react';
import './Checkout.css';
import LeftCheckout from './LeftCheckout';
import Payment from './Payment';
import FooterUI from "../components/FooterUI";
import Navbar from "../components/Navbar";
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiHomeHeartFill } from 'react-icons/ri';

function Checkout() {
  const [showPayment, setShowPayment] = useState(
  //   () => {
  //   return localStorage.getItem('showPayment') === 'true';
  // }
  );
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(
    localStorage.getItem('selectedDeliveryOption') || 'ship'
  );
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    localStorage.getItem('selectedPaymentOption') || 'COD'
  );
  const [selectedShippingOption, setSelectedShippingOption] = useState(
    localStorage.getItem('selectedShippingOption') || 'address'
  );
  const [selectedRegion, setSelectedRegion] = useState(
    localStorage.getItem('selectedRegion') || 'Koshi'
  );

  const handleCompleteOrder = () => {
    setShowPayment(true);
  };

  useEffect(() => {
    // Save selected options to localStorage whenever they change
    localStorage.setItem('selectedDeliveryOption', selectedDeliveryOption);
    localStorage.setItem('selectedPaymentOption', selectedPaymentOption);
    localStorage.setItem('selectedShippingOption', selectedShippingOption);
    localStorage.setItem('selectedRegion', selectedRegion);
  }, [selectedDeliveryOption, selectedPaymentOption, selectedShippingOption, selectedRegion]);

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleShippingOptionChange = (option) => {
    setSelectedShippingOption(option);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
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
        <div className='checkout_right'>
          <div className='contact_section'>
            <h2>Contact</h2>
          </div>
          <div className='inputbox_checkout'>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className='contact_section'>
            <h2>Delivery</h2>
          </div>
          <div className='optionbox_checkout'>
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedDeliveryOption === 'ship'}
                onChange={() => handleDeliveryOptionChange('ship')}
              />
              <label> Ship <MdOutlineLocalShipping /></label>
            </div>
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedDeliveryOption === 'pickup'}
                onChange={() => handleDeliveryOptionChange('pickup')}
              />
              <label>Pick up <RiHomeHeartFill /></label>
              </div>
              </div>

              {selectedDeliveryOption === 'pickup' && (
                <div className='message'>Currently not available</div>
              )}
          {selectedDeliveryOption === 'ship' && (
            <>
              <div className='inputbox_checkout'>
                <select
                  value={selectedRegion}
                  onChange={(e) => handleRegionChange(e.target.value)}
                  required
                >
                  <option value="Koshi">Koshi</option>
                  <option value="Madhesh">Madhesh</option>
                  <option value="Bagmati">Bagmati</option>
                  <option value="Gandaki">Gandaki</option>
                  <option value="Lumbini">Lumbini</option>
                  <option value="Karnali">Karnali</option>
                  <option value="Sudurpashchim">Sudurpashchim</option>
                </select>
                <label>Provision</label>
              </div>
              <div className="form-container">
                <div className='inputbox_checkout'>
                  <input type="text" required />
                  <label>Full Name</label>
                </div>
              </div>
              <div className='inputbox_checkout'>
                <input type="text" required />
                <label>Address</label>
              </div>
              <div className="form-container">
                <div className='inputbox_checkout'>
                  <input type="text" required />
                  <label>City</label>
                </div>
                <div className='inputbox_checkout'>
                  <input type="text" required />
                  <label>Phone</label>
                </div>
                </div>
                <div className='contact_section'>
                  <h5>Shipping method</h5>
                </div>
                <div className='optionbox_checkout'>
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedShippingOption === 'address'}
                onChange={() => handleShippingOptionChange('address')}
              />
              <div className="delivery_label">
              <label> Kathmandu valley</label>
              <span className="delivery_charge">Rs.120</span>
            </div>
            </div>
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedShippingOption === 'others'}
                onChange={() => handleShippingOptionChange('others')}
              />
              <div className="delivery_label">
              <label>Other Places</label>
              <span className="delivery_charge">Rs.220</span>
              </div>
              </div>
              <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedShippingOption === 'instant'}
                onChange={() => handleShippingOptionChange('instant')}
              />
              <div className="delivery_label">
              <label>Instant(only inside kathmandu valley)</label>
              <span className="delivery_charge">Rs.290</span>
              </div>
              </div>
              </div>
            </>
          )}
          <div className='contact_section'>
            <h2>Payment</h2>
          </div>
          <div className='optionbox_checkout'>
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedPaymentOption === 'COD'}
                onChange={() => handlePaymentOptionChange('COD')}
              />
              <label>Cash on delivery (COD)</label>
            </div>
            {selectedPaymentOption === 'COD' && (
                <div className='message'>Make a payment now to ensure faster processing of your deliveries.</div>
              )}
            <div className='delivery_option'>
              <input
                type="radio"
                checked={selectedPaymentOption === 'Pay now'}
                onChange={() => handlePaymentOptionChange('Pay now')}
              />
              <label>Pay now</label>
            </div>
            {selectedPaymentOption === 'Pay now' && (
                <div className='message'>We accept Esewa, FonePay, and Bank Transfer.</div>
              )}
          </div>
          <div className='Corder_checkout' onClick={handleCompleteOrder}>
            <p>Complete Order</p>
          </div>
          {showPayment ? <Payment />: null}
        </div>
      )}
    </div>
    <FooterUI/>
    </>
  );
}

export default Checkout;
