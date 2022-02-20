import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

const Generate = () => {

    const generateRandomColorString = () => {
        let s = ""
        for (let i = 0; i < 5; i++) {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16)
            s += (randomColor + "-")
        }
        s = s.substring(0, s.length - 1)
        Router.replace(`/[colorID]`, `/${s}`)
    }

    useEffect(() => {
        generateRandomColorString()
    }, [])

    return (
        <>
            <Head>
                <title>Generating</title>
            </Head>
            <div>Generating Colors...</div>
        </>
    )
}

export default Generate