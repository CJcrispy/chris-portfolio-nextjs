import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import userData from "../constant/data";

const Hero = () => {
    return(
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&#39;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700 text-3xl'>
                    Hi, I&#39;m <span className='text-blue-500'> {userData.name}</span>
                </h1>
                <h1 className='py-2 text-gray-700'>A {userData.designation}</h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
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
        </div>
    )

}

export default Hero;