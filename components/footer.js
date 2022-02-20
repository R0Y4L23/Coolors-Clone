import React from 'react'

const Footer = () => {
    return (
        <div className=' absolute bottom-0 w-full'>
            <div className='flex justify-between items-center sm:px-20 px-10 bg-gray-200 py-5'>
                <p className='text-gray-500'>© 2022 Coolors Clone By Subham Roy</p>
                <div className=' flex justify-center items-center text-lg font-semibold'>
                    <a target={"_blank"} href="https://github.com/R0Y4L23" rel="noreferrer"><i className="fa-brands fa-github mx-3 cursor-pointer"></i></a>
                    <a target={"_blank"} href="https://r0y4l23.itch.io/" rel="noreferrer"><i className="fa-brands fa-itch-io mx-3 cursor-pointer"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer