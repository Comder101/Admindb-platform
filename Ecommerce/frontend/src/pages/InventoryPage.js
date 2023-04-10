import React from "react";
import Navbar from "../components/Navbar";
import InventoryDetails from "../components/InventoryDetails";


const InventoryPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0">
                <Navbar />
                <InventoryDetails/>
            </div>
        </div>
    );
};

export default InventoryPage;
