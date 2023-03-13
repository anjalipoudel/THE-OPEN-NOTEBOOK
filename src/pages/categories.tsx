import SubMenu from '@/components/SubMenu'
import Link from 'next/link'
import react, { useState } from 'react'


export default function categories() {
    const suseState = () => {
        const [count, SetCount] = useState()
    }
    return (
        <>
            <a href="./categories" className="relative block py-6 px-4 lg:p-6 text-sm bg-blue-800 text-white">Categories</a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 z-10">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                    <div className="w-full text-white mb-8">
                        <h2 className="font-bold text-2xl">Find used books on sale</h2>
                        <p>For all level</p>
                    </div>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">

                            <h3 className="font-bold text-xl text-white text-bold mb-2">School level</h3>
                        </div>
                        <p className="text-gray-100 text-sm">class 8 - class 10</p>
                        <div className="flex items-center py-3">

                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                        </div>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">

                            <h3 className="font-bold text-xl text-white text-bold mb-2">Diploma</h3>
                        </div>
                        <p className="text-gray-100 text-sm">faculty</p>
                        <div className="flex items-center py-3">

                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                        </div>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">

                            <h3 className="font-bold text-xl text-white text-bold mb-2">+2</h3>
                        </div>
                        <p className="text-gray-100 text-sm">faculty</p>
                        <div className="flex items-center py-3">

                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                        </div>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">

                            <h3 className="font-bold text-xl text-white text-bold mb-2">Baclelor</h3>
                        </div>
                        <p className="text-gray-100 text-sm">faculty</p>
                        <div className="flex items-center py-3">

                            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                        </div>
                    </ul>
                </div>
            </div>

        </>
    )
}
