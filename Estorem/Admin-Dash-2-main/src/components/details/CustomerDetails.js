import React from "react";
import "./Orders.css";
import Modal from "../Modal";
import ViewSingleRole from "../viewsingle/ViewSingleRole";
import EditCustomer from "../forms/EditCustomer";

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

const obj={
  firstname: 'Rohan',
  lastname: 'Jadhav',
  email: 'rohan@gmail.com',
  contact: '11111111111',
  agentimage: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/rohit_sharma-sixteen_nine.png?size=948:533',
  city: 'georgia',
  address: 'Cecilia Chapman 711-2880 Nulla St.Mankato Mississippi 96522(257) 563-7401',
  state: 'Mississippi'
}

const CustomerDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>CUSTOMER ID</h2>
          <h2>CUSTOMER NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {info.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>CUSTOMER #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleRole obj={obj} role="CUSTOMER"/>}/>
              <Modal btnname="EDIT" compinfo={<EditCustomer />} />
              <Modal btnname="DELETE" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this Inventory Manager??</h2></>} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
