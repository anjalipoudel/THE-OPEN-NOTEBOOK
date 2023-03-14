import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { WishlistIcon } from '@/icons'
import Link from 'next/link'
import { Books } from '@/data/bookList'


export default function BookCard() {
    const [isWishAdd, setIsWishAdd] = useState([]);
    const [showMessage, setShowMessage] = useState(null);



    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage(null)
        }, 5000)

        return () => clearTimeout(timeout)
    }, [showMessage])



    const handleWishList = (index) => {
        if (!isWishAdd?.includes(index)) {
            setIsWishAdd(isWishAdd => [index, ...isWishAdd])
            setShowMessage(index)
        }
        else {
            setIsWishAdd(isWishAdd.filter(item => item !== index))
            setShowMessage(index)
        }
    }



    return (
        <div className='flex container m-auto  w-full  justify-between'>
            {Books.map((item, index) => (
                <div className='flex flex-col shadow-xl rounded-xl  container  h-80 p-3 leading-4' key={index}>
                    <div className='bg-gray-50  w-50  ' >
                        <Link href={`books/${item.book_id}`}>
                            <Image
                                src={item.book_image}
                                alt={item.book_name}
                                width={110}
                                height={40}
                                className="object-cover flex items-center p-3"
                                quality={100}
                            />
                        </Link>
                    </div>
                    <div className=' flex '>
                        <div className='text-sm'>
                            <div className='font-semibold'>
                                {item.book_name}
                            </div>
                            <div className=" font-semibold">Price:
                                {item.Price}</div>
                            <div>Author:
                                {item.Author_Name}</div>
                            <Link href="/cart">
                                <div className=' flex'>
                                    <input type='button' value={`Add To Cart`}
                                        className='cursor-pointer bg-[#7de3bb] p-3 rounded text-white hover:bg-blue-600' />
                                </div>
                            </Link>
                            <div>
                                {showMessage == index ? isWishAdd?.includes(index) ? 'Added  to Wishlist' : 'Removed From Wishlist' : ''}
                            </div>
                        </div>
                        <div className='flex  p-5'>
                            <div className='w-5 h-5'
                                onClick={() => {
                                    handleWishList(index);
                                }}
                                style={{ color: isWishAdd?.includes(index) ? 'red' : 'black' }}
                            >
                                {WishlistIcon}
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </div >
    )
}



