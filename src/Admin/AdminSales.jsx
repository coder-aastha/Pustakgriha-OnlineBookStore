import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Admin.css";
import "../css/AdminSales.css";

function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/checkout-all');
        setOrders(response.data);
        console.log('Fetched data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getStatusFromLocalStorage = (orderId) => {
    return localStorage.getItem(`orderStatus_${orderId}`) || '';
  };

  const handleStatusToggle = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        const newStatus = order.status === 'pending' ? 'paid' : 'pending';
        // Update the order status
        const updatedOrder = { ...order, status: newStatus };

        // Update localStorage with the new status
        localStorage.setItem(`orderStatus_${orderId}`, newStatus);

        return updatedOrder;
      }
      return order;
    });

    setOrders(updatedOrders);
  };
  return (
    <main className='grid-container'>
      <section className='sales-main_container'>
        <div className='sales_details'>
          <h3>Sales Details</h3>
          <div className='main-box_sales'>
          <div className='detail-box_sales'>
            <span>Name</span>
            <span>Address</span>
            <span>Book Title</span>
            <span>Phone Number</span>
            <span>Status</span>
          </div>

          {orders.map((order) => (
            <div className='user-details_sales' key={order._id}>
              <div>
                <label>{order.fullName}</label>
              </div>
              <div>
                <label>{order.address}</label>
              </div>
              <div>
                <label>{order.bookName}</label>
              </div>
              <div>
                <label>{order.phone}</label>
              </div>
              <div className='status-sales_admin'>
              <button onClick={() => handleStatusToggle(order._id)}>
                    {getStatusFromLocalStorage(order._id) || order.status === 'pending' ? 'Paid' : 'Pending'}
                  </button>
                </div>
              </div>
            ))}
        </div>
        </div>
      </section>
    </main>
  );
}

export default Home;