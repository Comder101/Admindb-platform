import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';


export default function AddSubcategory() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };
    console.log(errors);

    const [catarray, setcatarray] = useState([
        { id: 1, category: 'fruits' },
        { id: 2, category: 'vegetables' },
        { id: 3, category: 'dairy' },
        { id: 4, category: 'meat' },
    ])

    return (
        <div className='w-full'>
                        <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage'/>

            {/* printing submitted data on screen */}
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

            <div className='mt-8 p-8 h-screen mx-auto rounded overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center font-bold font-mono text-2xl'>SUB-CATEGORIES</h2>
                        <hr className='w-56 my-2 border-2 mx-auto' />

                        <div className='flex flex-col py-2'>
                            <label>Choose a Category</label>
                            {/* <input className='border p-2 mt-1 rounded-md' type="text" name='subcategory' placeholder='Enter Sub Category' {...register('subcategory', { required: true })}/> */}
                            <select name="category" className='border px-2 py-2 mt-1 w-full rounded-md' {...register('category', { required: true })}>
                                {catarray.map((cat) => (
                                    <option key={cat.id} value={cat.category}>{cat.category}</option>
                                ))}
                            </select>
                        </div>
                        <p className='text-red-600'> {errors.category && "Category is required"}</p>

                        <div className='flex flex-col py-2'>
                            <label>Sub Category</label>
                            <input className='border p-2 mt-1 rounded-md' type="text" name='subcategory' placeholder='Enter Sub Category' {...register('subcategory', { required: true })} />
                        </div>
                        <p className='text-red-600'> {errors.subcategory && "Sub Category is required"}</p>


                        <button className='font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>ADD SUB-CATEGORY</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


