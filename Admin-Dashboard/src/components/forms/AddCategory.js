import React from 'react'
import { useState } from "react";
import '../../App.css';
import Navbar from '../Navbar';
import axios from 'axios';
import Switch from '../Switch';
import Alert from '../Alert';

export default function AddCategory() {

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


    const [catobj, setcatobj] = useState({ category: '', color: ''});
    const [isToggled, setisToggled] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catobj+" "+isToggled)
        if(catobj.category===''){
            alert("Please fill all the fields");
            return;
        }
        else{    
            catobj.color===""?catobj.color="#000000":catobj.color=catobj.color; 
            axios.post("https://agrocart.onrender.com/api/category/",{
                category:catobj.category,
                color:catobj.color,
                allowed:isToggled
            })
            .then((response)=>{
                showAlert("Category Added Successfully","success")
                console.log(response);
                setcatobj({ category: '', color: ''}); 
            })
            .catch((error)=>console.log(error))
        }
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setcatobj({ category: '', color: '' });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }



    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Category Page" />
                    <Alert alert={alert} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>CATEGORIES</h2>
                                <hr className='w-48 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col justify-center'>

                                    <label>Enter a Category : </label>
                                    <input required className='p-2 resize-x border mt-2 rounded-md' type="text" name='category' value={catobj.category} onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex-col py-2 justify-center'>

                                    <label>Select Header Color : </label>

                                    <input value={catobj.color} required className='w-full h-8 p-2 mb-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex-col py-2'>

                                    <label  className="mr-4">Subcategory Allowed : </label>
                                    <Switch isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/>
                                </div>

                                <div className='flex mx-auto'>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onSubmit={handleSubmit}>SAVE</button>
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


