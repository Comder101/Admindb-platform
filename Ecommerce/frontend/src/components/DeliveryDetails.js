import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

    
const info = [
    {
      id: "12345",
      Name: "Rohan Mane",
    },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },{
        id: "12345",
        Name: "Rohan Mane",
      },
    
    
  ];

const DeliveryDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
      <div className="order-row mb-2">
        <div className="order-row-title">Employee Number</div>
        <div className="order-row-title">Delivery Agent</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {info.map((e) => (
          <div key={e.id} className="order-card font-poppins font-bold">
            <h2>Employee #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn">
              <Link to="/dashboard/editdeliveryagent" className="font-poppins font-bold border-black w-full mr-2 mt-2 mb-2 rounded-md p-2 bg-tailprimary hover:bg-tailtertiary text-black">
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

export default DeliveryDetails;
