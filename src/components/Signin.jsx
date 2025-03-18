/* import React from 'react' */
import { IoMdContact } from "react-icons/io";
function Signin() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">

            <div className="w-[90%] h-min  max-w-sm md:max-w-md lg:max-w-md p-5 bg-blue-500 flex-col flex items-center gap-7 top-0 rounded-xl ">
                <div className="text-5xl m-5  justify-items-center">
                    <IoMdContact className="" />
                </div>
                <div className="text-lg md:text-xl font-semibold ">
                    <h1 >Create Account</h1>
                </div>




                <div className="w-full flex flex-col gap-7">
                    <div className='w-full flex items-center gap-2  bg-gray-800 p-2 rounded-xl'>
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className='w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl'>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <div className='w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl'>
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                        />
                    </div>
                </div>
                <div className="">
                    <button className=' p-2 bg-white rounded-xl mt-5  text-base '>
                        Create
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Signin