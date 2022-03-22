import React from 'react'

interface ImageProps {
    mdsrc: string
    smsrc: string
    title: string
    description: string
}
// add interface to homeCard

const HomeLowerCard = ({ mdsrc, smsrc, title, description }: ImageProps) => {
    return (

        <div className="font-Roboto relative">
            <img src={mdsrc} className="w-full h-full hidden md:inline" />
            <img src={smsrc} alt="" className="w-full h-full md:hidden" />
            <div className="grid place-items-start absolute md:bottom-0 md:my-5 md:mx-10 text-xl md:text-white">

                <h1 className="font-extrabold md:text-7xl text-6xl -tracking-wide">
                    {title}
                </h1>
                <h1>
                    {description}
                </h1>
                <button className="bg-black md:bg-white rounded-full md:text-black  md:hover:bg-gray-200 text-white px-4 py-1 my-2 hover:bg-gray-600">
                    Shop
                </button>
            </div>

        </div>)
}

export default HomeLowerCard
