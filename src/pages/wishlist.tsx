import Image from 'next/image'
import React from 'react'

export default function wishlist() {
    return (
        <>
            <div className=' flex m-auto p-3 text-xl container font-bold'>Wish list</div>
            <div className="flex m-auto p-3 container">share on</div>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row md: '>
                    <div className="container bg-[#F5F5F5] font-medium h-20 items-center flex m-auto justify-between px-5 rounded">
                        <div>THUMBNAIL</div>
                        <div>TITLE</div>
                        <div>PRICE</div>
                        <div>ADD TO CART</div>
                        <div>REMOVE</div>
                    </div>
                </div >

                <div className="container bg-[#F5F5F5] font-medium h-20 items-center flex m-auto justify-between px-5 rounded">

                    <Image
                        src="/assets/img/books.jpg"
                        alt="wishlist Section"
                        width={50}
                        height={50}
                        className="object-cover p-1 rounded"
                        quality={100}
                    />
                    <div>30 Beautiful Children's Books</div>
                    <div>150.00</div>
                    <input type='submit' value="Add to Cart" className='cursor-pointer bg-red-600 p-2 rounded text-white hover:text-gray-100' />
                    <input type='submit' value="Remove" className='cursor-pointer bg-red-800 p-2 rounded text-white hover:text-gray-100' />
                </div >
            </div >
        </>
    )
}
