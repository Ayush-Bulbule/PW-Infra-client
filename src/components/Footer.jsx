import React from 'react'
import { FaFacebook, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer flex-col md:flex-row items-center justify-center md:justify-between px-10 py-8 md:p-20 border-t-2 border-gray-600 mt-20" >
            <div className="md:w-2/5">
                <img src="./logo.svg" alt='logo' className='mx-auto md:mx-0 py-3' />
                <p className="hidden md:block text-sm mt-3">©️ 2019 PVV Infra I Designed & Developed by</p>
                <p className="hidden md:block text-sm">TheBrandWorks</p>

            </div>
            <div className="md:w-2/5 flex flex-col md:flex-row items-center justify-start">
                <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200 rounded-sm'>About Us</a>
                <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200 rounded-sm'>Investor Relations</a>
                <a href="" className='text-sm uppercase text-gray-600 mx-3 w-full md:w-auto text-center py-2 hover:bg-gray-200 rounded-sm'>ContactUs</a>
            </div>
            <div className="md:w-1/5 flex flex-col items-center md:items-end">
                <p className='md:text-md text-xs mt-4 md:mt-0'>On Social Networks</p>
                <div className="flex mt-4 justify-end">
                    <p className="text-sm mx-2 text-black"><FaLinkedin /></p>
                    <p className="text-sm mx-2 text-black"><FaFacebookF /></p>
                    <p className="text-sm mx-2 text-black"><FaTwitter /></p>
                    <p className="text-sm mx-2 text-black"><FaGooglePlusG /></p>
                    <p className="text-sm mx-2 text-black"><FaInstagram /></p>

                </div>
            </div>
            <p className="md:hidden block text-xs text-gray-600 text-center mt-3">©️ 2019 PVV Infra I Designed & Developed by</p>
            <p className="md:hidden block text-xs text-gray-600 text-center">TheBrandWorks</p>

        </div >
    )
}

export default Footer