import React from "react";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";


const ProductPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0">
                <Navbar />
                <ProductDetails/>
            </div>
        </div>
    );
};

export default ProductPage;
