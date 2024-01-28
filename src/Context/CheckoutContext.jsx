
import { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkoutInfo, setCheckoutInfo] = useState({ bookName: '', totalPrice: 0 });

  const setCheckoutData = (bookName, totalPrice) => {
    setCheckoutInfo({ bookName, totalPrice });
  };

  return (
    <CheckoutContext.Provider value={{ checkoutInfo, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
