import Image from 'next/image'
import React from 'react'

export default function
    () {
    return (
        <div className='flex py-10'>
            <div className='flex flex-col shadow-xl rounded-xl h-80 m-5 leading-4'>
                <div className='bg-gray-50' >
                    <Image
                        src="/assets/img/simulation.jpg"
                        alt="wishlist Section"
                        width={200}
                        height={80}
                        className="object-cover flex items-center p-3"
                        quality={100}
                    />
                </div>
            </div>
            <div>
                <div> SIMULATION & MODELING</div>
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
                <div className='justify-center flex'>
                    <input type='button' value={`Buy Now`} className='cursor-pointer bg-[#c93b27]  p-3 rounded text-white hover:bg-blue-600' />
                </div>
            </div>
        </div>
    )
}
