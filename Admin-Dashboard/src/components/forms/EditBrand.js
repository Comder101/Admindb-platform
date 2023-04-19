import React from 'react'
import { useState,useEffect } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';
import axios from 'axios';
import Alert from '../Alert';


export default function EditBrand() {

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    const [vendorarray, setvendorarray] = useState([
        { id: 1, brand: 'Vendor1' },
        { id: 2, brand: 'Vendor2' },
        { id: 3, brand: 'Vendor3' },
        { id: 4, brand: 'Vendor4' },
    ])

    const [brandarray, setbrandarray] = useState([
        { id: 1, brand: 'Brand1' },
        { id: 2, brand: 'Brand2' },
        { id: 3, brand: 'Brand3' },
        { id: 4, brand: 'Brand4' },
    ])

    const getBrandArray = async () => {
        const response = await fetch(`https://agrocart.onrender.com/api/brand/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setbrandarray(json);
    }



    const [obj, setobj] = useState({
        oldbrand: '',
        vendorname: '',
        newbrand: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (obj.productname === '' || obj.newproductname === '' || obj.brand === '') {
        //     alert('Please fill all the fields');
        // }
        axios.put(`https://agrocart.onrender.com/api/brand/${obj.oldbrand}`,{
                bname:obj.newbrand,
            })
            .then((response) => {
                console.log(response);
                showAlert("Brand Updated Successfully","success")
                setobj({
                    oldbrand: '',
                    vendorname: '',
                    newbrand: ''
                });

            })
            .catch((error) => console.log(error))
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({
            oldbrand: '',
            vendorname: '',
            newbrand: ''
        });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getBrandArray();
        console.log(brandarray)
    }, [])
    

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Brand Page" />
                    <Alert alert={alert} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>Brands</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />
                                <div className='flex flex-col py-2'>
                                    <label>Select Brand</label>
                                    <select required name="oldbrand" value={obj.oldbrand} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                    <option value="select">Select</option>
                                        {brandarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.bname}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Enter Updated Brand Name</label>
                                    <input required className='border p-2 mt-1 rounded-md' type="text" name='newbrand' value={obj.newbrand} placeholder='Enter Updated Product Brand Name' onChange={onChange} />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Select Brand Vendor</label>
                                    <select required name="vendorname" value={obj.vendorname} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        <select value="select">Select</select>
                                        {vendorarray.map((cat) => (
                                            <option key={cat.id} value={cat.brand}>{cat.brand}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex mx-auto mt-2'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


