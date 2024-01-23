import React from 'react';
import './Checkout.css';

function LeftCheckout (){
    return(
        <div className='checkout_left'>
          <div className='bookDetail_checkout'>
          <div className="book-imgCheckout">
          <img src="https://m.media-amazon.com/images/I/81s0B6NYXML._SY522_.jpg" alt="" />
          <div className='bookText_checkout'>
          <h4>It Ends With Us</h4>
          <p>Rs.798</p>
          </div>
          </div>
          </div>
        </div>
    )
}

export default LeftCheckout;