import { ProfileIcon } from '@/icons'
import Image from 'next/image'

export default function Profile() {
    return (
        <>
            <div className='w-3/5  shadow-xl m-auto my-5 p-2 flex flex-col gap-2 justify-center items-center'>
                <div>
                    <div className='text-3xl font-bold '>Update Your Profile</div>
                    <div className='box-border  h-32 w-32 p-4 border-4 overflow-hidden'>
                        <Image src="/assets/img/hand-image.png"
                            alt='fill'
                            height={100}
                            width={100}

                            className='object-cover' />
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div>Name:</div>
                        <input
                            type="text"
                            className="border-2 focus:outline-none focus:shadow-outline   border-gray-300 text-gray-700 h-10 leading-tight w-96 rounded-md "
                        />
                    </div>
                    <div className=" flex flex-col  gap-2">
                        <div>Emai:</div>
                        <input
                            type="email"
                            className="border-2 focus:outline-none focus:shadow-outline   border-gray-300 text-gray-700 h-10 leading-tight w-96 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div>Phone:</div>
                        <input
                            type="number"
                            className="border-2 focus:outline-none focus:shadow-outline   border-gray-300 text-gray-700 h-10 leading-tight w-96 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div>DOB:</div>
                        <input
                            type="dob"
                            className="border-2 focus:outline-none focus:shadow-outline   border-gray-300 text-gray-700 h-10 leading-tight w-96 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div>Address:</div>
                        <input
                            type="Address"
                            className="border-2 focus:outline-none focus:shadow-outline h-10  border-gray-300 text-gray-700 leading-tight w-96 rounded-md"
                        />
                    </div>
                    <div className=" text-gray-500 gap-2">
                        <div>Bio:</div>
                        <textarea

                            rows={3}
                            className="border-2 focus:outline-none focus:shadow-outline  m-auto border-gray-300 text-gray-700 leading-tight w-96 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-3 border-2 border-[#0063F1] bg-[#7de3bb] hover:bg-white hover:text-[#0063F1] rounded-lg text-white text-xl font-bold w-40 focus:outline-none focus:shadow-outline"
                    >
                        submit
                    </button>
                </div>
            </div>


        </>
    )
}
