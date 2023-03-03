import React from 'react'
import Image from 'next/image'
import { CartIcon, WishlistIcon } from '@/icons'
import Link from 'next/link'


export default function BookCard() {
    return (
        <>
            <div className='flex flex-col shadow-xl rounded-xl h-80 m-5 leading-4'>
                <div className='bg-gray-50' >
                    <Link href="./BookPage">
                        <Image
                            src="/assets/img/simulation.jpg"
                            alt="wishlist Section"
                            width={130}
                            height={50}
                            className="object-cover flex items-center p-3"
                            quality={100}
                        />
                    </Link>
                </div>
                <div className=' flex justify-between'>
                    <div className='text-sm'>
                        <div className='font-semibold'>      SIMULATION & MODELING</div>
                        <div className=" font-semibold">Price:
                            RS. 150</div>
                        <div>Author:
                            Er. Santosh Dhungana</div>
                        <Link href="/cart">
                            <div className=' flex'>
                                <input type='button' value={`Add To Cart`} className='cursor-pointer bg-[#7de3bb] p-3 rounded text-white hover:bg-blue-600' />
                            </div>
                        </Link>


                    </div>
                    <div className='flex m- auto p-5'>
                        <Link href="/wishlist">
                            <div className='w-5 h-5'>
                                {WishlistIcon}
                            </div>
                        </Link>

                    </div>

                </div>




            </div>
        </>
    )
}
