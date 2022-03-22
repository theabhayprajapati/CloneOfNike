import Image from 'next/image'
import React from 'react'
import { HeartIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
const HeaderComponents = () => {
    return (
        <div className="flex  items-center justify-between relative">
            <div >
                <Image src="/Nike_Swoosh_Logo_Black_original.jpg" objectFit='contain' width={60} height={60} />
            </div>
            <div className='ml-32 hidden md:inline'>
                <ul className='flex gap-3 justify-around items-center '>
                    <li className='hover:underline font-medium cursor-pointer transform transition-all duration-200 '>
                        Men
                    </li>
                    <li className='hover:underline font-medium cursor-pointer transform transition-all duration-200 '>
                        Women
                    </li>
                    <li className='hover:underline font-medium cursor-pointer transform transition-all duration-200 '>
                        Kids
                    </li>
                    <li className='hover:underline font-medium cursor-pointer transform transition-all duration-200 '>
                        Sale
                    </li>
                    <li className='hover:underline font-medium cursor-pointer transform transition-all duration-200 '>
                        New Arrivals
                    </li>
                </ul>

            </div>
            <div className='flex gap-2 items-center '>
                <div className='md:w-[180px] w-10  rounded-full h-[40px] items-center px-1 flex hover:bg-gray-200 cursor-pointer transform transition-all duration-200 bg-gray-100 border'>
                    <span className='h-[38px] items-center justify-center flex  rounded-full w-10 cursor-pointer transform transition-all duration-200 hover:bg-gray-200'>
                        <SearchIcon className=' h-7 rounded-full' />
                    </span>
                    <div className='h-[38px] hidden md:inline'>
                        <input className=' outline-none rounded-full w-full h-full hover:bg-gray-200 hover:placeholder:text-black' placeholder='Search' />
                    </div>
                </div>
                <span className="hover:bg-gray-200 rounded-full h-[38px] flex items-center w-[38px] justify-center cursor-pointer transform transition-all duration-200">
                    <HeartIcon className='h-7 ' />
                </span>
                <span className="hover:bg-gray-200 rounded-full h-[38px] flex items-center w-[38px] justify-center cursor-pointer transform transition-all duration-200">
                    <ShoppingBagIcon className='h-7 ' />
                </span>
            </div>

        </div >
    )
}

export default HeaderComponents