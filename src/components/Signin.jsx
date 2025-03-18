/* import React from 'react' */

function Signin() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-blue-500 flex-col flex items-center gap-3 rounded-xl ">
                <h1 className="text-lg md:text-xl font-semibold">Create Account</h1>

                <p className="text-xs md:text-sm text-gray-500 text-center">
                    <span className="text-white">Sign up</span>
                </p>

                <div className="w-full flex flex-col gap-3">
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
                <button className='w-fll p-2 bg-white rounded-xl mt-5 hover:bg-blue-300 text-sm'>
                    Login
                </button>
            </div>

        </div>
    )
}

export default Signin