import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import SingleProduct from "./SingleProduct";
import EditProduct from "./forms/EditProduct";



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
      
      <div className="orders-container">
      <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>PRODUCT ID</h2>
          <h2>PRODUCT NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {info.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>Product #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<SingleProduct/>}/>
              <Modal btnname="EDIT" compinfo={<EditProduct/>}/>
              <Modal btnname="DELETE" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this product??</h2></>}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
