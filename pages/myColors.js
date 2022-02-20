import React, { useEffect } from 'react'
import Head from 'next/head';

const MyColors = () => {


    const [colors, setColors] = React.useState([]);

    useEffect(() => {
        setColors(localStorage.getItem('color') ? JSON.parse(localStorage.getItem('color')) : []);
    }, []);

    const removeFromLocalStorageByIndex = (index) => {
        const newColors = [...colors];
        newColors.splice(index, 1);
        setColors(newColors);
        localStorage.setItem('color', JSON.stringify(newColors));
    }

    return (
        <>
            <Head>
                <title>My Colors</title>
            </Head>
            <div className='flex flex-wrap p-10'>
                {colors.map((color, index) => {
                    return (
                        <div key={index} className="bg-white rounded shadow border p-6 w-72 m-5" style={{ backgroundColor: "#" + color }}>
                            <h5 className="text-3xl font-bold mb-4 mt-0 uppercase">#{color}</h5>
                            <i onClick={() => { removeFromLocalStorageByIndex(index) }} className="fa-solid fa-trash-can text-red-600 mt-4 cursor-pointer"></i>
                        </div>
                    )
                })}
                {colors.length === 0 && <p className='text-center text-gray-700 text-xl font-semibold'>No Colors Yet</p>}
            </div>
        </>
    )
}

export default MyColors