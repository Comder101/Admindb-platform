import React from 'react'
import '../App.css';



export default function Home() {



    return (
        <div className='m-0 p-0  justify-center w-full'>
            {/* <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage' /> */}
            <div className='bg-black'>

                <h1 className='p-8  font-bold text-4xl text-center text-white'>Welcome to the Admin Dashboard</h1>
            </div>
            <div className='bg-gray-200 w-full'>

                <img className='mx-64 pt-32 pb-32 w-1/2 object-cover' src="https://www.pngmart.com/files/7/Groceries-Transparent-Background.png" alt="" />
            </div>
        </div>
    )
}

