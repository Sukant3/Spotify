import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-color p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}></img>
                    <img onClick={() => navigate(1)} className='w-8 bg-color p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}></img>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-black text-white text-[15px] px-4 py-1 rounded-2xl border border-gray-300 hover:border-black hover:shadow-md transition-all duration-200 cursor-pointer hidden md:block'>
                        Explore Premium </p>
                    <p className='bg-black text-white py-1 px-3 rounded-xl text-[15px] border border-gray-800 hover:bg-blue-900 hover:shadow-lg transition-all duration-200 cursor-pointer'>
                        Install App </p>
                    <p className='bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center border border-purple-700 hover:bg-purple-600 hover:scale-105 transition-transform duration-200 cursor-pointer'>
                        S </p>
                </div>

            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar