import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';



export default function EditDeliveryAgent() {

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };
    console.log(errors);

    return (
        <div className='w-full'>
                    <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage'/>

        {/* printing submitted data on screen */}
        <pre className='text-white'>{JSON.stringify(userInfo,undefined,2)}</pre>

            <div className='mt-8 p-8 h-screen mx-auto rounded overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
                        {/* <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2> */}
                        <h2 className='text-center font-bold font-mono text-2xl'>DELIVERY AGENT</h2>
                        <hr className='w-36 mt-2 border-2 mx-auto'/>

                        <div className='flex flex-col py-2'>
                            <label>Name</label>
                            <input className='mt-1 border p-2 rounded-md' type="text" name='name' placeholder='Enter Name' {...register('name', { required: true })}/>
                        </div>
                        <p className='text-red-600'> {errors.name && "Delivery Agent Name is required"}</p>


                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input className='mt-1 border p-2 rounded-md' type="email" name='email' placeholder='Enter Email' {...register('email', { required: true })}/>
                        </div>
                        <p className='text-red-600'>{errors.email && "Delivery Agent Email is required"}</p>


                        <div className='flex flex-col py-2'>
                            <label>Contact Number</label>
                            <input className='mt-1 border p-2 rounded-md' type="text" name='contact' placeholder='Enter Contact Number' {...register('contact', { required: true })}/>
                        </div>
                        <p className='text-red-600'> {errors.contact && "Delivery Agent Contact Number is required"}</p>

                        <div className='flex flex-col py-2'>
                            <label>Upload Delivery Agent Image</label>
                            <input className='mt-1 border p-2 rounded-md' type="file" name="agentimage" {...register('agentimage', { required: true })}/>
                        </div>
                        <p className='text-red-600'>{errors.agentimage && "Delivery Agent Image is required"}</p>

                        <button className='font-poppins font-bold border w-full mt-3 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>EDIT DELIVERY AGENT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


