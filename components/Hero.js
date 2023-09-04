import Link from 'next/link';
import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import landing from "../constant/landingPic.jpg";
import Image from 'next/image';
import userData from "../constant/data";

const Hero = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div>
                    <Image className="mb-4  rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" 
                        width={350}
                        height={350}
                        alt="hero pic" 
                        src={landing}
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                    Hi, I&#39;m <span className='text-blue-500'> {userData.name}</span>
                    </h1>
                    <h3 className=' sm:text-2xl text-2xl mb-4 text-gray-700'>A {userData.designation}</h3>
                    <p className="mb-8 leading-relaxed">
                    I’m focused on building fully automated tests and CI/CD pipelines to accommodate them.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                        href={userData.socialLinks.linkedin}
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        </a>
                        <a
                        href={userData.socialLinks.github}
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        </a>
                        <a href={userData.resumeUrl}
                        download>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Hero;