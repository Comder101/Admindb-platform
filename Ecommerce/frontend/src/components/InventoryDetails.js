import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

    
const info = [
    {
      id: "12345",
      Name: "Aditya Pande",
    },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },{
        id: "12345",
        Name: "Aditya Pande",
      },
      
  ];

const InventoryDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
      <div className="order-row mb-2">
        <div className="order-row-title">Manager ID</div>
        <div className="order-row-title">Inventory Manager</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {info.map((e) => (
          <div key={e.id} className="order-card font-poppins font-bold">
            <h2>Manager #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn">
              <Link to="/dashboard/editinventorymanager" className="font-poppins font-bold border-black w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-tailtertiary text-black">
                EDIT DETAILS
              </Link>
              <Link to="/" className="font-poppins font-bold border-black w-full mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-red-700 text-black">
                DELETE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryDetails;
