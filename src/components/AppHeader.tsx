import { CartIcon, LoginIcon, MenuIcon, ProfileIcon, SearchIcon, WishlistIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function AppHeader() {
    const [searchTerm, setSearchTerm] = useState("");
    return (

        <>
            {/* top-header */}
            <div className='flex flex-col md:flex-row items-center text-lg justify-between container m-auto gap-5 md:gap-12'>
                <Link href="/">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Hero Section"
                        width={150}
                        height={50}
                        className="object-cover"
                        quality={100}
                    />
                </Link>
                <div className='flex' >
                    <input type='text' placeholder='Search....' className="border-2 rounded w-96 boder-black " />


                    <button type='button' className='border-black justify-between' value="search" ><div className=' text-black w-8 h-8'>
                        {SearchIcon}
                    </div></button>
                </div>
                <div className='flex gap-10'>
                    <Link href="/wishlist">
                        <div className='w-8 h-8'>
                            {WishlistIcon}
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className=' text-black w-8 h-8'>
                            {CartIcon}
                        </div>
                    </Link>
                    <Link href="/login">
                        <div className='w-8 h-8'>
                            {ProfileIcon}
                        </div>
                    </Link>
                </div>
            </div >

            {/* menu-bar */}
            {/* < div className="flex text-lg  w-full py-3 items-center px-5 shadow-2xl" >
                <div className='container flex gap-12 justify-items-start md:justify-center '>
                    <Link href='/'>Home</Link>
                    <Link href='/categories'>Categories</Link>
                    <Link href='/deals'>Deals</Link>
                    <Link href='/blog'>Blog</Link>
                </div>
            </div> */}
            <div className="bg-gray-200 font-sans leading-normal tracking-normal">
                <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
                    <div className="container mx-auto flex items-center">

                        <ul className="flex items-center m-auto gap-5">
                            <Link href='/'><li>Home</li></Link>

                            <Link href='/deals'><li>Deals</li></Link>
                            <Link href='/Profile'><li>Blog</li></Link>
                            <li className="hoverable hover:bg-blue-800 hover:text-white">
                                <a href="./categories" className="relative block py-6 px-4 lg:p-6 text-sm hover:bg-blue-800 hover:text-white">Categories</a>
                                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 z-10">
                                    <div className="container mx-auto w-full flex flex-wrap justify-between">
                                        <div className="w-full text-white mb-8">
                                            <h2 className="font-bold text-2xl">Find used books on sale</h2>
                                            <p>For all level</p>
                                        </div>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">

                                                <h3 className="font-bold text-xl text-white text-bold mb-2">School level</h3>
                                            </div>
                                            <p className="text-gray-100 text-sm">class 8 - class 10</p>
                                            <div className="flex items-center py-3">

                                                <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">

                                                <h3 className="font-bold text-xl text-white text-bold mb-2">Diploma</h3>
                                            </div>
                                            <p className="text-gray-100 text-sm">faculty</p>
                                            <div className="flex items-center py-3">

                                                <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">

                                                <h3 className="font-bold text-xl text-white text-bold mb-2">+2</h3>
                                            </div>
                                            <p className="text-gray-100 text-sm">faculty</p>
                                            <div className="flex items-center py-3">

                                                <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">

                                                <h3 className="font-bold text-xl text-white text-bold mb-2">Baclelor</h3>
                                            </div>
                                            <p className="text-gray-100 text-sm">faculty</p>
                                            <div className="flex items-center py-3">

                                                <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )


}


