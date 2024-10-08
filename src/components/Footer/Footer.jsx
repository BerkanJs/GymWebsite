import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl'>
        <div className='container'>


            <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white'>
            <div className='py-8 px-4 space-y-4'>
                <div className=' text-2xl flex items-center gap-2 font-bold uppercase'>
                   <FaDumbbell />
                   <p>MY GYM</p>
                   <p className='text-hoverColor'>App.</p>



                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam laboriosam nulla animi possimus, ea porro dicta beatae optio tempore sed eveniet perspiciatis alias, repellendus ducimus rem. Saepe, ipsa est.</p>
                <div className='flex items-cemter justify-start gap-5 !mt-6'>
                    <a href="">
                    <HiLocationMarker className='text-3xl' />

                    </a>
                    <a href="">
                    <IoLogoInstagram className='text-3xl' />

                    </a>
                    <a href="">
                    <FaFacebook className='text-3xl' />

                    </a>
                    <a href="">
                    <FaLinkedin className='text-3xl' />

                    </a>

                </div>


            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Important Links</h1>
                    <ul className='flex flex-col gap-5'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>

                    </ul>

                </div>

                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Company Links</h1>
                    <ul className='flex flex-col gap-5'>
                        <li>
                            <a href="#">Our Services</a>
                        </li>
                        <li>
                            <a href="#">Berkan Özçelik</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>

                    </ul>

                </div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Blog Links</h1>
                    <ul className='flex flex-col gap-5'>
                        <li>
                            <a href="#">Today</a>
                        </li>
                        <li>
                            <a href="#">Last Blogs</a>
                        </li>



                    </ul>

                </div>
            </div>




            </div>





        </div>






    </div>
  )
}

export default Footer