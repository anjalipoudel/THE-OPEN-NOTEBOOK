import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, GithubIcon, } from "../icons";


export default function Footer() {
    return (
        <>
            {/* Subscription box      */}

            <div className="relative container items-center justify-center mx-auto md:rounded-2xl bg-[#7de3bb] rounded-none w-full px-10 text-white font-poppins py-10">
                <div className="justify-center gap-24 lg:gap-56 items-center flex lg:flex-row flex-col">

                    <div className="flex flex-col justify-center items-center gap-2 relative w-full text-left">
                        <div className="w-full font-bold text-2xl  flex uppercase ">
                            SUBSCRIBE TO OUR NOTEBOOK
                        </div>
                        <div className="text-sm lg:text-lg text-left">
                            To receive tour packages, news, updates and offers via email.
                        </div>
                    </div>
                    <div className="hidden lg:flex relative">
                        <div className="w-72 h-44">
                            <Image
                                src="/assets/img/hand-image.png"
                                layout="fill"
                                objectFit="contain"
                                alt="Susbcribe to our Newsletter- Astranix Technologies Pvt. Ltd."
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <div className="bg-[#7de3bb] ">
                <div className="grid lg:grid-col-3 lg:grid-flow-col grid-col-1 mt-20 pt-8 container m-auto items-start p-5 gap-6 font-poppins">
                    <div className="flex flex-col gap-5 max-w-sm">
                        <div className="w-56 h-14 relative">
                            <Link href="/">
                                <Image
                                    src="/assets/img/logo.png"
                                    alt="Hero Section"
                                    width={150}
                                    height={50}
                                    className="object-cover"
                                    quality={100}
                                />
                            </Link>
                        </div>
                        <div className="text-white lg:text-start text-justify ">
                            We offer lots of services including
                            web hosting & cloud solutions but as our
                            core set of tools, we help to transform
                            an idea to a finished product usually in
                            the form of Web App and Mobile App.
                        </div>
                        <div className="flex flex-row ">
                            <FooterCard
                                url="https://www.facebook.com/sabnom.poudel"
                                icon={FacebookIcon}
                            />

                            <FooterCard
                                url="https://www.instagram.com/anjalip0udel/"
                                icon={InstagramIcon}
                            />

                            <FooterCard
                                url="https://github.com/anjalipoudel"
                                icon={GithubIcon}
                            />
                        </div>
                    </div>
                    <div className="text-white text-md flex flex-col gap-2 ">
                        <div className="font-bold  ">Quick Links</div>
                        <div className="flex flex-row lg:gap-2 ">
                            <ul>
                                <Link href="/">
                                    <li className=" cursor-pointer hover:underline">Home</li>
                                </Link>
                                <Link href="/about">
                                    <li className=" cursor-pointer hover:underline ">About Us</li>
                                </Link>
                                <Link href="/services">
                                    <li className=" cursor-pointer hover:underline">Services</li>
                                </Link>
                                <Link href="/blog">
                                    <li className=" cursor-pointer hover:underline">Blog</li>
                                </Link>
                                <Link href="/contact">
                                    <li className=" cursor-pointer hover:underline">Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white flex flex-col gap-2 ">
                        <div className="font-bold text-white uppercase">MAILING ADDRESS</div>
                        <div className="flex flex-col lg:gap-2  ">

                            <div className="flex flex-row ">
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-3 w-5 ">{MailIcon}
                                        </div>
                                        <div>sabnom77poudel@gmail.com</div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="h-4 w-5 ">
                                        </div>
                                        <div>anjali.info.np</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row ">
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-4 w-5 ">{PhoneIcon}
                                        </div>
                                        <div>(+977) 9845952673</div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="h-4 w-5 ">
                                        </div>
                                        <div>(+977) 9845952673</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 justify-center items-start">
                        <div className="text-white font-bold uppercase">Payement We Accept</div>
                        <div className="flex gap-5 justify-center items-center ">
                            <div className="flex gap-5 flex-col">
                            </div>
                            <div className="flex gap-5 flex-col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#7de3bb] w-full flex justify-center">
                <div className="flex pb-5 text-white font-poppins justify-start pl-5 md:pl-0 lg:justify-center text-sm lg:text-lg">
                    Developed by Anjali Poudel |© 2022 All rights reserved
                </div>
            </div>
        </>
    );
}

const FooterCard = ({ icon, url }: { icon: JSX.Element; url: string }) => {
    return (
        <Link href={url}>
            <div className=" text-white hover:-translate-y-1 duration-300 hover:scale-110 flex cursor-pointer">
                <div className="w-10 h-9 p-2 items-center justify-center"> {icon}</div >
            </div>
        </Link >
    )
}