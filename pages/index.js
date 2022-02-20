import React from 'react'
import Footer from '../components/footer'
import Router from 'next/router'
import Head from 'next/head'

const Index = () => {
  return (
    <>

      <Head>
        <title>Coolors Clone</title>
      </Head>

      <div className='md:flex'>
        <div className='md:w-1/2 w-full 2xl:px-52 sm:px-32 px-10 flex flex-col justify-center items-center xl:mt-0 mt-32'>
          <p className=' lg:text-5xl text-3xl font-bold text-center alfa'>The Super Fast Color Palette Generator!</p>
          <p className='lg:text-2xl text-lg text-center my-10 text-[#464858] font-semibold'>Create the perfect palette or get
            inspired by thousands of beautiful color schemes.</p>
          <div>
            <p
              onClick={() => { Router.push('/generate') }}
              className='bg-[#0066FF] text-white text-center font-semibold px-20 py-3 text-xl rounded-xl cursor-pointer'>
              Generate!</p>
          </div>
        </div>
        <div className='w-1/2 xl:p-32 p-24 xl:mt-0 mt-32 md:block hidden'>
          <svg version="1.1" id="homepage_hero_image-mobile" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 498.94 301.86" xmlSpace="preserve">
            <path d="M450.79,288.72V20.22c0.1-7.6-6.1-13.9-13.8-14c0,0,0,0-0.1,0H59.59c-7.7,0.1-13.9,6.3-13.9,13.9c0,0,0,0,0,0.1v268.5
		H450.79z"></path>
            <g id="homepage_hero-generator-laptop-mobile">
              <path className="st01" d="M324.79,16.12h112c2.2,0,4,1.8,4,4v255h-116V16.12z">
              </path>
              <rect x="249.79" y="16.12" className="st11" width="115" height="259"></rect>
              <rect x="171.79" y="16.12" className="st21" width="115" height="259"></rect>
              <rect x="94.79" y="16.12" className="st31" width="116" height="259"></rect>
              <path className="st41" d="M59.79,16.12h74v259h-78v-255C55.79,17.92,57.59,16.12,59.79,16.12z"></path>
            </g>
            <path className="st51"
              d="M9.79,285.22h480l0,0c0,5.5-4.5,10-10,10h-460C14.29,295.22,9.79,290.72,9.79,285.22L9.79,285.22z"></path>
          </svg>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index