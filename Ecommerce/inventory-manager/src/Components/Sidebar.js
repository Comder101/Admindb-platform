import React from "react";
import "./Sidebar.css";
import { AiOutlineBars, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLogoCodepen } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container2">
      <div className="company-header">
        <Link to="/" className="heading">
          <h2>Groccery</h2>
        </Link>
        <IoLogoCodepen size={30} style={{ color: "black" }} />
        <AiOutlineBars size={30} style={{ color: "black" }} />
      </div>

      <div className="search-bar">
        <AiOutlineSearch size={25} style={{ color: "black" }} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="inventory-manager">
        <button>
          <BsFillPersonFill size={22} style={{ color: "black" }} />
          <Link to="/" className="heading">
            <h3>Inventory Manager</h3>
          </Link>
        </button>
      </div>
      <div className="inventory-manager">
        <button>
          <AiOutlineShoppingCart size={22} style={{ color: "black" }} />
          <Link to="/orderqueue" className="heading">
            <h3>Order Queue</h3>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
