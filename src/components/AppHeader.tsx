import { MenuIcon, ProfileIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
    return (
        <>
            {/* top-header */}
            <div className='flex items-center text-lg justify-between container m-auto gap-12'>
                <Image
                    src="/assets/img/logo.png"
                    alt="Hero Section"
                    width={150}
                    height={50}
                    className="object-cover"
                    quality={100}
                />

                <div className='flex' >
                    <input type='text' placeholder='Search....' className="border-2 rounded w-96 boder-black ">

                    </input>
                    <button type='button' className='border-black justify-between' value="search" ><div className=' text-black w-8 h-8'>
                        {ProfileIcon}
                    </div></button>
                </div>
                <div className='flex gap-10'>
                    <Link href="/cart">
                        <div className=' text- rounded w-10 h-10 bg-slate-400 p-2 border-black'>
                            {ProfileIcon}
                        </div>
                    </Link>
                    <div className=' text-black w-8 h-8'>
                        {ProfileIcon}
                    </div>
                    <div className=' text-black w-8 h-8'>
                        {ProfileIcon}
                    </div>
                    <div className=' text-black w-8 h-8'>
                        {ProfileIcon}
                    </div>
                </div>
            </div>

            {/* menu-bar */}
            <div className="flex text-lg gap-12 w-full py-3 items-center  px-5 lg:mx-auto  shadow-2xl" >
                <a href='/home'>Home</a>
                <a href='/Categories'>Categories</a>
                <a href='/Deals'>Deals</a>
                <a href='/Blog'>Blog</a>
            </div>
        </>
    )

}


