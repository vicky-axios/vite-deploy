/* import React from 'react' */
import { IoMdContact } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function Signin() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">

            <div className="w-[90%] h-min  max-w-sm md:max-w-md lg:max-w-md p-5 bg-white flex-col flex items-center gap-7 top-0  ">
                <div className="text-5xl m-5  justify-items-center">
                    <IoMdContact className="text-blue-700" />
                </div>
                <div className="text-lg md:text-xl font-semibold ">
                    <h1 >Create Account!</h1>
                </div>




                <div className="w-full flex flex-col gap-7">
                    <div className='w-full flex items-center gap-2 bg-gray-200 p-2 rounded-sm'>
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className='w-full flex items-center gap-2 bg-gray-200 p-2 rounded-sm'>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className='w-full flex items-center gap-2 bg-gray-200 p-2 rounded-sm'>
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className="mr-72">
                        <button className=' p-2 bg-blue-700 rounded-md mt-5  text-base px-7 flex items-center gap-2 text-white md:text-base'>
                            Create <FaArrowRight />
                        </button>
                    </div>

                    <div className="font-normal text-gray-600 ms-16  mt-10">
                        <h3>Or create account using social media!</h3>
                        <div className="flex flex-row gap-5 mt-3 justify-center mr-10 text-2xl ">
                            <FaFacebook className="text-blue-800" />
                            <FaTwitter className="text-blue-500" />
                            <FaPinterest className="text-red-500" />
                        </div>


                    </div>

                </div>

                <br />



            </div>

        </div>
    )
}

export default Signin;