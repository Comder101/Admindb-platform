import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

const orders = [
  {
    orderNumber: "12345",
    details: "Vegetables",
  },
  {
    orderNumber: "23456",
    details: "Fruits",
  },
  {
    orderNumber: "34567",
    details: "Vegetables",
  },
  {
    orderNumber: "12243",
    details: "Fruits",
  },
  {
    orderNumber: "23324",
    details: "Vegetables",
  },
  {
    orderNumber: "86767",
    details: "Fruits",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
];

const Orders = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
      <h1 className="font-bold ">Order Queue</h1>
      <div className="order-row">
        <div className="order-row-title">Order Number</div>
        <div className="order-row-title">Items</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.orderNumber} className="order-card font-poppins font-bold">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <div className="btn">
              <Link to="/orderassign" className="font-poppins font-bold border w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-tailtertiary text-black">
                Know More
              </Link>
              <Link to="/orderassign" className="font-poppins font-bold border w-full mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-red-700 text-black">
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
