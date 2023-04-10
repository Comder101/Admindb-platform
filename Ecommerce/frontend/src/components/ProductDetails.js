import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";


const info = [
  {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  }, {
    id: "777",
    Name: "Milk Product",
  },

];



const ProductDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
      <div className="order-row mb-2">
        <div className="order-row-title">Product Id</div>
        <div className="order-row-title">Product Name</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {info.map((e) => (
          <div key={e.id} className="order-card font-poppins font-bold">
            <h2>Product #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn">
              <Link to="/" className="font-poppins font-bold  border-2 w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-tailtertiary text-black">
                VIEW
              </Link>
              <Link to="/dashboard/editproduct" className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-tailtertiary text-black">
                EDIT
              </Link>
              <Link to="/" className="font-poppins font-bold  border-2 w-full mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-red-700 text-black">
                DELETE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
