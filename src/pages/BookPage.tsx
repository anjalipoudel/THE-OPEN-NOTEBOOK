import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from "react";

export default function BookPage() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div className='flex gap-32 py-10'>
            <div className='flex flex-col shadow-xl rounded-xl   leading-4'>
                <div className='bg-gray-50' >
                    <Image
                        src="/assets/img/bookpage.jpg"
                        alt="wishlist Section"
                        width={350}
                        height={50}
                        className="object-cover flex items-center p-3"
                        quality={100}
                    />
                </div>
            </div>
            <div className='bg-red w-auto h-auto text-xl font-medium text-gray-500 leading-10'>
                <div className='text-[#7de3bb] text-3xl'> SIMULATION & MODELING</div>
                <div>Price:
                    RS. 395</div>

                <div>Author:
                    Er. Santosh Dhungana</div>
                <div> Subject:
                    Simulation & Modeling
                </div>
                <div> Grade:
                    CSIT 5th Sem</div>

                <div> Published Year:
                    2020</div>
                <div>
                    ISBN:
                    978-9937-724-65-4</div>

                <div> Version:
                    English
                </div>
                <div className=' flex'>
                    <input type='button' value={`Buy Now`} className='cursor-pointer bg-[#7de3bb]  p-2 rounded text-white hover:bg-blue-600' />
                </div>
            </div>
            <div className='border w-1/5 h-auto p-10 leading-10 '>
                <div>NPR.150.00</div>
                <div>Delivery to most major cities inside Nepal</div>
                <div className="flex flex-row gap-2 ">
                    <button type="button" onClick={decNum} className='w-6 border rounded     '>-</button>
                    <input type="text" className="w-10 rounded px-2" value={num} onChange={handleChange} />
                    <button className="w-6 border rounded  " type="button" onClick={incNum}>+</button>
                </div>
                <div className=' flex'>
                    <input type='button' value={`Add To Cart `} className='cursor-pointer w-60  border p-3 mt-5 rounded  hover:bg-blue-600' />
                </div>
                <div className=' flex'>
                    <input type='button' value={`Add To Wish List`} className='cursor-pointer w-60  border p-3 mt-5 rounded  hover:bg-blue-600' />
                </div>

            </div>
        </div>
    )
}
