import React from "react";
import "./Orders.css";
import Modal from "../Modal";
import EditInventoryManager from "../forms/EditInventoryManager";
import ViewSingleManager from "../viewsingle/ViewSingleManager";

const info = [
  {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  }, {
    id: "12345",
    Name: "Aditya Pande",
  },

];

const InventoryDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>MANAGER ID</h2>
          <h2>MANAGER NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {info.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>Manager #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleManager />} />
              <Modal btnname="EDIT" compinfo={<EditInventoryManager />} />
              <Modal btnname="DELETE" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this Inventory Manager??</h2></>} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryDetails;
