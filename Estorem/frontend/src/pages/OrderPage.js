import React from "react";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";


const Queue = () => {
    return (
        <div className="container">
            <div className="main m-0 p-0">
                <Navbar />
                <Orders />
            </div>
        </div>
    );
};

export default Queue;
