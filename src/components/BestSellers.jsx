import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookcards from './Bookcards';

const BestSellers = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/booklisting");
        setBook(response.data.book); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Bookcards book={book} headline="Best Seller Books" />
    </div>
  );
};


export default BestSellers;
