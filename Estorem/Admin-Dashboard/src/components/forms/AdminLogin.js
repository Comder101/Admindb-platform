import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';


export default function AdminLogin({ update, login }) {
    const navigate = useNavigate();

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
        navigate("/dashboard/home");        
    };
    console.log(errors);

    const onLoginSubmit = (e) => {
        e.preventDefault();
        // login();
        navigate("/dashboard/home");
    }
    return (
        <div className='w-full'>
                    {/* <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage'/> */}

        {/* printing submitted data on screen */}
        <pre className='text-white'>{JSON.stringify(userInfo,undefined,2)}</pre>

            <div className='mt-8 p-8 h-screen mx-auto rounded-lg overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    {/* <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}> */}
                    <form className='w-full mx-auto bg-white p-4' onSubmit={onLoginSubmit}>

                        {/* <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2> */}
                        <h2 className='text-center font-bold font-mono text-2xl'>ADMIN LOGIN</h2>
                        <hr className='w-36 mt-2 border-2 mx-auto'/>

                        
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input required className='mt-1 border p-2 rounded-md' type="email" name='email' placeholder='Enter Email' {...register('email', { required: true })}/>
                        </div>
                        <p className='text-red-600'>{errors.email && "Email is required"}</p>


                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input required className='mt-1 border p-2 rounded-md' type="password" name='password' placeholder='Enter Name' {...register('name', { required: true },{minLength:4})}/>
                        </div>
                        <p className='text-red-600'> {errors.password && "Password is required"}</p>

                        <button className='font-poppins font-bold border w-full mt-3 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}



