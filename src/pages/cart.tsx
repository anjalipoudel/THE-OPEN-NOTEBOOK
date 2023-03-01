import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function cart() {
    return (
        <>
            <div className='flex flex-row m-auto p-4 container h-96'>
                <div className='flex flex-col  w-1/2 p-5  bg-[#7b92b0]  shadow-lg rounded-lg '>
                    <div className='flex flex-row text-lg text-white justify-between bg-[#7b92b0]  items-center'>
                        <div className='font-semibold'>My Cart (1)</div>
                        <div className='font-semibold'>Price</div>
                    </div>
                    <div className='h-52 grid grid-cols-3' >
                        <div className='flex p-5'> <Image
                            src="/assets/img/books.jpg"
                            alt="Cart Section"
                            width={100}
                            height={80}
                            className="object-cover"
                            quality={100}
                        /></div>
                        <div className='flex flex-col p-5'>
                            <div className='font-semibold'>  name</div>
                            <div> author</div>
                            <div className='bg-white h-6 w-12'>+ 1 -</div>
                            <div className='text-xs gap-6 flex flex-row'>
                                <div>Add to wish list</div>
                                <div>remove</div>
                            </div>
                        </div>
                        <div className='flex flex-col p-5  font-semibold'>NRP.150.00</div>
                    </div>
                    <div className='font-semibold flex justify-center '>
                        {`continue shopping >`}
                    </div>
                </div>
            </div>
            <div className=" flex flex-col pt-10 w-full  m-auto items-center">
                <div className=" text-[#bd3525] text-6xl font-light  ">
                    Your Bag Is Empty.
                </div>
                <Image
                    src="/assets/img/empty_cart.png"
                    alt="empty cart"
                    width="300"
                    height="200"
                    className="object-cover"
                    quality={100}
                />
                <div>Signin to see if you have any saved items</div>
                <div>
                    My profile
                    <Link href='/orders'>
                        <li>Orders
                        </li>
                    </Link>
                    <Link href='/Account'>
                        <li>Account</li>
                    </Link>
                    <Link href='/yoursaves'>
                        <li>Your Saves</li>
                    </Link>
                    <Link href='/login'>
                        <li>Login</li>
                    </Link>
                </div>
            </div>
        </>
    )
}
