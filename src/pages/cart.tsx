import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function cart() {
    return (
        <div className=" flex flex-col pt-10 w-full h-96 m-auto items-center">
            <div className=" text-[#bd3525] text-6xl font-light  ">
                Your Bag Is Empty.</div>
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

    )
}
