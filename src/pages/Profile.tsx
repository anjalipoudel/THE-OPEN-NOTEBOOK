import { ProfileIcon } from '@/icons'

export default function Profile() {
    return (
        <>
            <div className=' flex flex-col justify-center items-center container  '>

                <div className="hidden lg:flex bg-[#7de3bb] justify-center items-center p-3 w-14 h-14 text-red rounded-full">
                    <div className=" w-6 text-black">{ProfileIcon}</div>
                </div>
                <div className="font-medium text-lg lg:text-2xl flex items-center">
                    Profile
                </div>
                <div className="flex flex-col gap-3 ">
                    <p className="font-bold text-2xl text-center p-2">
                        Update your profile
                    </p>
                </div>
            </div>

            <div className=' flex flex-col  bg-[#7de3bb] w-1/3 h-[500px] mb-10 m-auto p-3 justify-center items-center container  gap-5 '>

                <div className="flex text-gray-500 gap-2">
                    <div>Name:</div>
                    <input
                        type="text"
                        className="border-1 focus:outline-none focus:shadow-outline border-gray-300 text-gray-700 w-60  rounded-sm p-1"
                    />
                </div>
                <div className="flex text-gray-500 gap-2">
                    <div>Emai:</div>
                    <input
                        type="email"
                        className="border-1 focus:outline-none focus:shadow-outline border-gray-300 text-gray-700 w-60  rounded-sm p-1"
                    />
                </div>
                <div className="flex text-gray-500 gap-2">
                    <div>Phone:</div>
                    <input
                        type="number"
                        className="border-1 focus:outline-none focus:shadow-outline border-gray-300 text-gray-700 w-60  rounded-sm p-1"
                    />
                </div>
                <div className="flex text-gray-500 gap-2">
                    <div>DOB</div>
                    <input
                        type="dob"
                        className="border-1 focus:outline-none focus:shadow-outline border-gray-300 text-gray-700 w-60  rounded-sm p-1"
                    />
                </div>
                <div className="flex text-gray-500 gap-2">
                    <div>Address:</div>
                    <input
                        type="Address"
                        className="border-1 focus:outline-none focus:shadow-outline border-gray-300 text-gray-700 w-60  rounded-sm p-1"
                    />
                </div>

                <div className="flex text-gray-500 gap-2">
                    <div>Bio:</div>
                    <textarea

                        rows={3}
                        className="border-2 focus:outline-none focus:shadow-outline  m-auto border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="p-3 border-2 border-[#0063F1] bg-[#7de3bb] hover:bg-white hover:text-[#0063F1] rounded-lg text-white text-xl font-bold w-40 focus:outline-none focus:shadow-outline"
                >
                    submit

                </button>



















            </div>


        </>
    )
}
