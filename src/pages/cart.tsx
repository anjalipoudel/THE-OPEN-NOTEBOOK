
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";



export default function CartPage() {
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
        <>
            <div className='flex flex-col md:flex-row m-auto p-4  gap-32 container '>
                <div className='flex flex-col  w-full md:w-3/5 p-5  bg-[#7b92b0]  shadow-lg rounded-lg '>
                    <div className='flex flex-row text-lg text-white justify-between  items-center'>
                        <div className='font-semibold'>My Cart (1)</div>
                        <div className='font-semibold'>Price</div>
                    </div>
                    <div className='flex flex-row  justify-between' >
                        <div className='flex'>
                            <Image
                                src="/assets/img/books.jpg"
                                alt="Cart Section"
                                width={110}
                                height={70}
                                className="object-cover"
                                quality={100}
                            />
                        </div>
                        <div>
                            <div className='flex flex-col '>
                                <div className='font-semibold'>30 Beautiful Children's Books</div>
                                <div className='text-sm flex gap-3'>BY
                                    <p className='text-green-800'> J.D Salinger</p>
                                </div>
                                <div>Ratings
                                </div>


                                <div className="flex flex-row gap-2 ">
                                    <button type="button" onClick={decNum} className='w-6 text-white rounded  bg-[#f60100] '>-</button>
                                    <input type="text" className="w-10 rounded px-2" value={num} onChange={handleChange} />
                                    <button className="w-6 text-white rounded  bg-[#f60100] " type="button" onClick={incNum}>+</button>
                                </div>

                            </div>

                        </div>
                        <div className='flex flex-col p-5  justify-end font-semibold'>
                            <div>NRP.150.00
                            </div>
                            <div className=' text-[#f60100]  '>remove</div>
                        </div>

                    </div>

                    <div className='justify-center flex'>
                        <input type='button' value={`continue shopping >`} className='cursor-pointer bg-[#f60100] p-3 rounded text-white hover:bg-blue-600' />
                    </div>


                </div>
                <div className='bg-[#f3f3f1] w-full md:w-2/5 p-2 rounded-lg'>
                    <div className='text-xl font-bold p-3'>Order Summary</div>
                    <div className='text-base font-semibold p-3 flex justify-between '>
                        <div>sub-total</div>
                        <div>US$32.27</div>
                    </div>
                    <div className='text-base font-semibold p-3 flex justify-between '>
                        <div>Delivery</div>
                        <div>!</div>
                    </div>
                    <div className='text-sm flex flex-row m-auto text-green-800 p-3'>standard Delivery (US$0.00)</div>
                    <div className='text-sm  m-auto p-3'>Got a discount code?</div>
                    <div className='text-lg font-semibold p-3 flex justify-between '>
                        <div>Total</div>
                        <div>US$32.27</div>
                    </div>
                    <div className='justify-center flex'>
                        <input type='button' value="CHECKOUT" className='cursor-pointer bg-[#f60100] p-3 rounded text-white hover:bg-blue-600' />
                    </div>
                    <div>we Accept:</div>
                </div>
            </div >
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