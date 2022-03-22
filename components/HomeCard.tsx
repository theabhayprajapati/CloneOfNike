import React from 'react'

interface ImageProps {
    mdsrc: string
    smsrc: string
    title: string
    description: string
}
// add interface to homeCard

const HomeCard = ({ mdsrc, smsrc, title, description }: ImageProps) => {
        return (
            <div className="font-Roboto">
                <img src={mdsrc} className="w-full h-full hidden md:inline" />
                <img src={smsrc} alt="" className="w-full h-full md:hidden" />
                <div className="mx-auto grid place-items-center my-10 text-xl">
                    <h1>
                        {description}
                    </h1>
                    <h1 className="font-extrabold md:text-7xl text-6xl -tracking-wide">
                        {title}
                    </h1>
                    <button className="bg-black rounded-full text-white px-4 py-1 my-2 hover:bg-gray-600">
                        Shop
                    </button>
                </div>

            </div>
    )
}

export default HomeCard