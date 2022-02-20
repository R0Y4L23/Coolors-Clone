/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useRouter } from 'next/router';
import ColorBar from '../components/colorBar';
import Head from 'next/head';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Color = () => {

    const router = useRouter()
    const { width, height } = useWindowDimensions();

    const [color, setColor] = React.useState([])
    const [colorLength, setColorLength] = React.useState(5)
    const [positionLocked, setPositionLocked] = React.useState([])

    const addLockPosition = (position) => {
        setPositionLocked([...positionLocked, position])
        NotificationManager.info('Position Locked')
    }

    const removeLockPosition = (position) => {
        let a = []
        for (let i = 0; i < positionLocked.length; i++) {
            if (positionLocked[i] !== position) {
                a.push(positionLocked[i])
            }
        }
        setPositionLocked(a)
        NotificationManager.info('Position Unlocked')
    }

    const removeColor = (position) => {
        if (colorLength > 1) {
            let s = ""
            for (let i = 0; i < color.length; i++) {
                if (i !== position) {
                    s += (color[i] + "-")
                }
            }
            s = s.substring(0, s.length - 1)
            router.push(`/[colorID]`, `/${s}`)
            NotificationManager.success('Color Removed', 'Success', 3000)
        }
    }

    const addColor = () => {
        if (colorLength < 10) {
            let s = router.query.colorID + "-" + Math.floor(Math.random() * 16777215).toString(16)
            NotificationManager.success('Color Added', 'Success', 3000)
            router.push(`/[colorID]`, `/${s}`)
        }
    }

    const savePaletteToLocalStorage = () => {
        let palette = JSON.parse(localStorage.getItem('palette'))
        if (palette) {
            if (palette.includes(router.query.colorID)) {
                NotificationManager.error('Palette Already Exists', 'Error', 3000)
            } else {
                palette.push(router.query.colorID)
                localStorage.setItem('palette', JSON.stringify(palette))
                NotificationManager.success('Palette Saved', 'Success', 3000)
            }
        } else {
            localStorage.setItem('palette', JSON.stringify([router.query.colorID]))
            NotificationManager.success('Palette Saved', 'Success', 3000)
        }

    }

    const colorID = router.query.colorID

    const initialize = () => {
        let colors = colorID.split('-')
        setColor(colors)
        setColorLength(colors.length)
    }

    React.useEffect(() => {
        if (router.isReady) {
            initialize()
        }
    }, [router.isReady, router.query])


    const generateRandomColorArray = () => {
        let s = "";
        for (let i = 0; i < colorLength; i++) {
            if (positionLocked.includes(i)) {
                s += (color[i] + "-")
            } else {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16)
                s += (randomColor + "-")
            }
        }
        s = s.substring(0, s.length - 1)
        NotificationManager.success('Palette Generated', 'Success', 3000)
        router.push(`/[colorID]`, `/${s}`)
    }

    return (
        <>
            <Head>
                <title>Color Palette</title>
            </Head>
            <div className='w-screen sm:flex grid grid-cols-2'>
                <p className='m-5 sm:mx-5 mx-auto border border-black sm:w-40 w-24 text-center p-2 rounded-lg cursor-pointer' onClick={generateRandomColorArray}>Generate Random</p>
                {colorLength <= 9 && <p className='m-5 sm:mx-5 mx-auto border border-black sm:w-40 w-24 text-center p-2 rounded-lg cursor-pointer' onClick={addColor}>Add Color</p>}
                <p className='m-5 sm:mx-5 mx-auto border border-black sm:w-40 w-24 text-center p-2 rounded-lg cursor-pointer' onClick={savePaletteToLocalStorage}>Save Palette</p>
                <p className='m-5 sm:mx-5 mx-auto border border-black sm:w-40 w-24 text-center p-2 rounded-lg cursor-pointer' onClick={() => { navigator.clipboard.writeText("http://localhost:3000/" + router.query.colorID); NotificationManager.success('Color Copied To Clipboard', 'Success', 3000) }}>Share Palette</p>
            </div>
            <div className={`flex ${width >= 640 ? "w-screen flex-row" : "flex-col"}`}>

                {color.map((colors, index) => {
                    return (<ColorBar isLocked={positionLocked.includes(index)} removeLock={removeLockPosition} addLock={addLockPosition} remove={removeColor} color={colors} key={index} position={index} total={color.length} />)
                })}
            </div>
            <NotificationContainer />
        </>
    )
}

export default Color