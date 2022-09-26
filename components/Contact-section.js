import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import couple from "../public/profilePic.jpeg";
import userData from "../constant/data"

const ContactSection = () => {
  return (
    <section>
      <div className='w-full'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
          <div className="max-w-6xl h-48">
            <h1 className=" text-5xl md:text-9xl font-bold py-20  md:text-left">
              Contact
            </h1>
          </div>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full '>
                <div>
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={couple}
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2'>{userData.name} {userData.lastName}</h2>
                  <p>{userData.designation}</p>
                  <p className='py-4'>
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
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

                    <a
                      href={userData.socialLinks.showwcase}
                      target='_blank'
                      rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                    </a>
                    
                    <Link href={userData.resumeUrl} download>
                      <a download>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form
                  action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                  method='POST'
                  encType='multipart/form-data'
                >
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='10'
                      name='message'
                    ></textarea>
                  </div>
                  <button className='w-full p-4  mt-4'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;