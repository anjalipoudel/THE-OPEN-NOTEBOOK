import Link from 'next/link'
import React from 'react'

export default function Logout() {
    return (
        <>
            <div className="flex justify-center items-center my-36">
                <div className="flex flex-col w-1/4 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
                    <div className=" flex flex-col gap-5 ">
                        <div className='flex flex-col gap-3'>
                            <p className=" font-bold text-4xl text-center "> Session Closed</p>
                            <p className=" text-gray-400 text-center text-md ">You have been logged out of the session.</p>
                        </div>
                        <div>
                            <p className="text-teal-900 font-bold text-sm text-center">
                                <Link href="/">Return Back to Home</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}