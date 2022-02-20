/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Head from 'next/head';
import Router from 'next/router';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import NotificationManager from 'react-notifications/lib/NotificationManager';

const PaletteCard = ({ colorCode, remove, position }) => {

    const [colorArray, setColorArray] = React.useState([]);

    const initialize = () => {
        let colors = colorCode.split('-')
        setColorArray(colors)
    }

    React.useEffect(() => {
        initialize()
    }, [])


    return (
        <div className="bg-white rounded shadow border p-6 w-72 m-5">
            <div className='flex justify-between h-40 border border-black' style={{ width: "100%" }}>
                {colorArray.map((color, index) => {
                    return (
                        <div key={index} onClick={() => { navigator.clipboard.writeText(color); NotificationManager.success("Copied To Clipboard", 'Success', 3000) }} style={{ backgroundColor: "#" + color, height: "100%", width: (100 / colorArray.length) + "%", cursor: "pointer" }}>
                        </div>
                    )
                })}
            </div>
            <p className="text-gray-700 text-sm font-semibold uppercase cursor-pointer mt-8" onClick={() => { Router.push(`/[colorID]`, `/${colorCode}`) }}>View Palette</p>
            <i onClick={() => { remove(position) }} className="fa-solid fa-trash-can text-red-600 mt-4 cursor-pointer"></i>
        </div>)
}

const MyPalette = () => {
    const [colors, setColors] = React.useState([]);

    useEffect(() => {
        setColors(localStorage.getItem('palette') ? JSON.parse(localStorage.getItem('palette')) : []);
    }, []);


    const removeFromLocalStorageByIndex = (index) => {
        const a = [];
        for (let i = 0; i < colors.length; i++) {
            if (i !== index) {
                a.push(colors[i])
            }
        }
        setColors(a);
        localStorage.setItem('palette', JSON.stringify(a));
    }

    return (
        <>
            <Head>
                <title>My Palette</title>
            </Head>
            <div className='flex flex-wrap p-10'>
                {colors.map((color, index) => {
                    return (
                        <PaletteCard key={index} colorCode={color} remove={removeFromLocalStorageByIndex} position={index} />
                    )
                })}
                {colors.length === 0 && <p className='text-center text-gray-700 text-xl font-semibold'>No Palettes Yet</p>}
            </div>
            <NotificationContainer />
        </>
    )
}

export default MyPalette