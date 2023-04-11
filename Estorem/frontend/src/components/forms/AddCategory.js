import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';


export default function AddCategory() {

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const [userInfo, setUserInfo] = useState();

    // const onSubmit = (data) => {
    //     setUserInfo(data);
    //     console.log(data);
    // };
    // console.log(errors);



    const [catobj, setcatobj] = useState({ category: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catobj);
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }



    return (
        // <div className='w-full'>
        //     <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage' />
        //     {/* printing submitted data on screen */}
        //     <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

        //     <div className='mt-8 p-8 h-screen mx-auto rounded overflow-hidden'>
        //         <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

        //             <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
        //                 {/* <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2> */}
        //                 <h2 className='text-center font-bold font-mono text-2xl'>CATEGORIES</h2>
        //                 <hr className='w-48 mt-2 border-2 mx-auto' />
        //                 <div className='flex flex-col py-2'>
        //                     <label>Enter a Category</label>
        //                     <input className='border p-2 mt-2 rounded-md' type="text" name='category' placeholder='Enter Category' {...register('category', { required: true })} />
        //                 </div>
        //                 <p className='text-red-600'> {errors.category && "Category is required"}</p>

        //                 <button className='font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>ADD CATEGORY</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className='w-full'>
            <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage' />
            <pre className='text-white'>{JSON.stringify(catobj, undefined, 2)}</pre>

            <div className='mt-8 p-8 h-screen mx-auto rounded overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                        <h2 className='text-center font-bold font-mono text-2xl'>CATEGORIES</h2>
                        <hr className='w-48 mt-2 border-2 mx-auto' />
                        <div className='flex flex-col py-2'>
                            <label>Enter a Category</label>
                            <input className='border p-2 mt-2 rounded-md' type="text" name='category' onChange={onChange} placeholder='Enter Category' />
                        </div>
                        <button type='submit' className='font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>ADD CATEGORY</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


