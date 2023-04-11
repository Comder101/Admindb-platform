import React from "react";
import Sidebar from "../Sidebar";
import NavBar from "../OrderQueue/NavBar";
import AssignPage from "./AssignPage";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <NavBar />
        <AssignPage />
      </div>
    </div>
  );
};

export default Queue;
