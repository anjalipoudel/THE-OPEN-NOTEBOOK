import React, { useState } from 'react'
import Image from 'next/image'
import { WishlistIcon } from '@/icons'
import Link from 'next/link'
import { Books } from '@/data/bookList'


export default function BookCard() {
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState('')
    const [wishCount, setWishCount] = useState(0);

    const addWishList = () => {
        if (isWishAdd == false) {
            setIsWishAdd(true);
            setColor(!color);
            setMessage('Added to the Wishlist');
            setIsWishAdd(!isWishAdd);
        }
        else {
            setIsWishAdd(false);
            setColor(!color);
            setMessage('Removed from the Wishlist');
            setTimeout(() => {
                setMessage("")
            }, 3000)
        }
    }

    let incwishCount = () => {
        if (wishCount < 10) {
            setWishCount(Number(wishCount) + 1);
        }
    };
    let decwishCount = () => {
        if (wishCount > 0) {
            setWishCount(wishCount - 1);
        }
    }
    let handleChange = (e) => {
        setWishCount(e.target.value);
    }
    return (
        <div className='flex container m-auto justify-between'>
            {Books.map((item, index) => (
                <div className='flex flex-col shadow-xl rounded-xl h-80 p-4  leading-4' key={index}>
                    <div className='bg-gray-50' >
                        <Link href="./BookPage">
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
                    <div className=' flex justify-between'>
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
                                    <input type='button' value={`Add To Cart`} className='cursor-pointer bg-[#7de3bb] p-3 rounded text-white hover:bg-blue-600' />
                                </div>
                            </Link>
                            <div>
                                {message}
                            </div>
                        </div>
                        <div className='flex m- auto p-5'>
                            <div className='w-5 h-5'


                                onClick={() => {
                                    addWishList();
                                    // setWishCount();

                                }}
                                style={{ color: color ? 'red' : 'black' }}
                            >
                                {WishlistIcon}
                            </div>
                        </div>
                    </div>
                </div >
            ))}
        </div>
    )
}

