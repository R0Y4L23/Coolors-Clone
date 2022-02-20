import React from 'react'
import NotificationManager from 'react-notifications/lib/NotificationManager'
import useWindowDimensions from '../hooks/useWindowDimensions'

const ColorBar = ({ color, total, position, remove, addLock, removeLock, isLocked }) => {


    const { width } = useWindowDimensions();

    const saveColorToLocalStorage = () => {
        let colors = JSON.parse(localStorage.getItem('color'))
        console.log(colors)
        if (colors) {
            if (colors.includes(color)) {
                NotificationManager.error('Color Already Exists', 'Error', 3000)
            } else {
                colors.push(color)
                localStorage.setItem('color', JSON.stringify(colors))
                NotificationManager.success('Color Saved', 'Success', 3000)
            }
        } else {
            localStorage.setItem('color', JSON.stringify([color]))
            NotificationManager.success('Color Saved', 'Success', 3000)
        }
    }

    return (
        <div className={`${width >= 640 ? "h-[85vh]" : "w-full"} text-center text-3xl uppercase group py-20`} style={{ backgroundColor: "#" + color, width: width >= 640 ? `${100 / total}%` : "100%" }}>
            {color}
            <div className='flex sm:flex-col sm:mx-0 mx-16 flex-row justify-between items-center mt-5 sm:invisible group-hover:visible'>
                <i onClick={() => { remove(position) }} className="fa-solid fa-xmark my-10 cursor-pointer text-gray-300 hover:text-gray-500"></i>
                <i onClick={() => { navigator.clipboard.writeText(color); NotificationManager.success("Copied To Clipboard", 'Success', 3000) }} className="fa-solid fa-share-nodes my-10 cursor-pointer text-gray-300 hover:text-gray-500"></i>
                <i onClick={() => { if (isLocked) { removeLock(position) } else { addLock(position) } }} className={`fa-solid fa-lock my-10 cursor-pointer ${isLocked ? "text-gray-500" : "text-gray-300 hover:text-gray-500"}`}></i>
                <i onClick={saveColorToLocalStorage} className="fa-solid fa-bookmark my-10 cursor-pointer text-gray-300 hover:text-gray-500"></i>
            </div>
        </div>
    )
}

export default ColorBar