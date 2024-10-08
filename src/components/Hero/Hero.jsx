import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import HeroImg from "../../img/dumbell.png"
import{motion} from "framer-motion";
import{FadeUp} from '../../utility/animation'
const Hero = () => {
  return (
    <div>
        <section>
            <motion.div
            variants={FadeUp(0.4)}
            initial={"hidden"}
            whileInView={"visible"}
            className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                    <div className='text-center md:text-left space-y-6'>
                    <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>GYM Gives you the perfect <span className='text-hoverColor'>Health</span></h1>
                    <p className='text-gray-600 xl:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reiciendis odio, saepe unde porro numquam ad odit nulla nemo qui.</p>
                    <div className='flex justify-center items-center gap-8 md:justif-start !mt-4'>
                        <button className='primary-btn'>Order Now</button>
                        <button className='flex justify-center items-center gap-2'> <FaCaretRight />Watch Now</button>



                    </div>
                    </div>
                </div>



                {/* Hero Image*/}
                <div className='flex justify-center items-center'>
                <img className='w-[350px] md:w-[550px] xl:w-[700px]drop-shadow1' src={HeroImg} alt="" />
                </div>





            </motion.div>






        </section>
    </div>
  )
}

export default Hero