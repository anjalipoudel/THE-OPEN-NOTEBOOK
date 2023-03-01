import { CartIcon, LoginIcon, MenuIcon, ProfileIcon, SearchIcon, WishlistIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
    return (
        <>
            {/* top-header */}
            <div className='flex items-center text-lg justify-between container m-auto gap-12'>
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
                    <input type='text' placeholder='Search....' className="border-2 rounded w-96 boder-black ">

                    </input>
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
            < div className="flex text-lg gap-12 w-full py-3 items-center container m-auto  px-5  shadow-2xl" >
                <Link href='/home'>Home</Link>
                <Link href='/categories'>Categories</Link>
                <Link href='/deals'>Deals</Link>
                <Link href='/blog'>Blog</Link>
            </div>
        </>
    )

}


