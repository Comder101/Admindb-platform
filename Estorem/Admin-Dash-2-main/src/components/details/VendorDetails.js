import React from "react";
import "./Orders.css";
import Modal from "../Modal";
import EditVendor from "../forms/EditVendor";
import ViewSingleRole from "../viewsingle/ViewSingleRole";

const info = [
    {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
    }, {
        id: "12345",
        Name: "Rohan Mane",
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



const VenodrDetails = () => {


    return (
        <>
            <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
                <div className="orders-container">
                    <div className="flex pl-6 pt-2 pb-1 justify-between pr-20 font-poppins font-bold text-black ">
                        <h2>Vendor Id</h2>
                        <h2>Vendor Name</h2>
                        <h2>Options</h2>
                    </div>


                    {info.map((e) => (
                        <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
                            <h2>Employee #{e.id}</h2>
                            <p>{e.Name}</p>
                            <div className="btn flex m-0 p-0">
                                <Modal btnname="DETAILS" compinfo={<ViewSingleRole obj={obj} role="Vendor"/>} />
                                <Modal btnname="EDIT" compinfo={<EditVendor />} />
                                <Modal btnname="DELETE" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this Delivery Agent??</h2></>} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VenodrDetails;
