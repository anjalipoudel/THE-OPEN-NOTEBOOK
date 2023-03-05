import Link from 'next/link'
import React from 'react'

export default function deals() {
    return (<>

        <ul className='flex flex-row gap-20 p-20 '>
            <Link href="#"><li>Discount Sales</li></Link>
            <Link href="#"><li>Used Books</li></Link>
            <Link href="#"> <li>BOGO</li></Link>
        </ul>

        <div className='flex m-auto items-center flex-row justify-center p-3 '>NO Deals Available</div>
    </>
    )
}
