import React, {useState} from 'react';
import { FaTruck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import "../css/App.css";
import axios from 'axios';

const DeliveryLocationDay = () => {

  // // const{ addTOCart } = useCart();
  // const [itemName, setItemName] = useState(0);
  // const[quantity, setQuantity] = useState(1);
  // const [price, setPrice] = useState(0);


  // const addToCart = () =>{
  //    axios.post('/addToCart', {
  //     itemName: itemName,
  //     quantity: quantity,
  //     price: price,
  //    })
  //     // alert('Item added to cart successfully');
  //     .then((response) => {
  //       console.log('Item added successfully:', response.data);
  //       toast.success('Item added successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error adding Items:', error);
  //     });
  // };

  // const handleAddToCart = () =>{
  //   const newItem ={ itemName, quantity, price};
  //   addToCart(newItem);
  // }

  return (
    <div className="mainDeliveryLocation">
      <h6 className="deliveryTitle">Get Estimated Arrival Time</h6>
      <div className="chooseLocationTime">
        <span className="frontIconDelivery">
          <FaLocationDot />
        </span>
        <div className="deliveryLocation">
          <h6>Kathmandu</h6>
          <p className="locationDescription">Kathmandu, Nepal</p>
        </div>
        <div className="dropdown-icon">
          <button className="dropDownBtn">
            <PiPencilSimpleLineFill />
          </button>
        </div>
      </div>
      <div className="deliveryDayEstimation">
        <span className="frontIconDelivery">
          <FaTruck />
        </span>
        <div className="deliveryLocation">
          <h6>Delivery Within</h6>
          <p>1 to 2 days</p>
        </div>
        <div className="dropdown-icon">
          <span className="backIconDelivery">
            <BsInfoCircle />
          </span>
        </div>
      </div>
      <div className="quantityPrice">
        <h6>Rs. 450</h6>
        <div className="quantity">
          <span className="addSub">
            <FaMinus />
          </span>
          <h6 className="quantityText">QTY: 1</h6>
          <span className="addSub">
            <MdOutlineAdd />
          </span>
        </div>
      </div>
      <button className="addToCartDelivery">ADD TO CART</button>
    </div>
  );
};

export default DeliveryLocationDay;
