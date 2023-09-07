import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'



const Navbar = () => {
    const [navState, setnavState] = useState("hidden");

    const handleNavButton = () => {
        console.log("hi");
        if (navState === "hidden") {
            setnavState("flex")
        } else {
            setnavState("hidden")
        }
    }
    return (
        <div className="w-full max-w-screen bg-white font-montserrat">
            <div className="container mx-auto px-8 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center  ">
                <div className="w-full flex items-center justify-between">
                    <img src="./logo.svg" alt='logo' />
                    <button onClick={handleNavButton} className='flex md:hidden text-2xl text-amber-500'><HiMenu /></button>
                </div>
                <div className={`${navState} flex-col md:flex-row items-center md:flex w-full ms:w-auto mt-3 md:mt-0`}>
                    <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200  hover:bg-transparent rounded-sm'>Home</a>
                    <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200 hover:bg-transparent  rounded-sm'>About Us</a>
                    <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200  hover:bg-transparent rounded-sm'>Investor Relations</a>
                    <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200 hover:bg-transparent  rounded-sm'>ContactUs</a>
                    <button className=' bg-amber-400 px-6 py-2 text-xs uppercase rounded-md font-roboto font-semibold text-gray-700 outline-none border-none'>Share Price</button>
                </div>

            </div>
        </div >
    )
}

export default Navbar