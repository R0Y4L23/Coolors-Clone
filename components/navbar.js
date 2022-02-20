import React from 'react'
import { useRouter } from "next/router"

const Navbar = () => {

    const router = useRouter()

    return (
        <div className='flex sm:flex-row flex-col justify-between items-center py-3 sm:px-20 px-10 shadow-lg'>
            <p className='alfa text-[#0066FF] text-2xl cursor-pointer' onClick={() => { router.push("/") }}>Coolors Clone</p>
            <div className=' flex justify-center items-center text-lg font-semibold'>
                <p onClick={() => { router.push("/myColors") }} className={` ${router.pathname == "/myColors" ? "border-b-2" : "hover:border-b-2"} border-[#0066ff] cursor-pointer`}>My Colors</p>
                <div className=' bg-[#ECECEC] mx-3 w-[1px] h-12'></div>
                <p onClick={() => { router.push("/myPalette") }} className={` ${router.pathname == "/myPalette" ? "border-b-2" : "hover:border-b-2"} hover:border-b-2 border-[#0066ff] cursor-pointer`}>My Palettes</p>
            </div>
        </div>
    )
}

export default Navbar