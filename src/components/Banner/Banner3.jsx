import React from 'react'
import{motion} from "framer-motion";
import{FadeUp} from '../../utility/animation'

const Banner3 = () => {
  return (
    <div className='container my-14'>
        <div className='bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center'>

            {/* brand info */}
            <div className='flex flex-col justify-center text-center space-y-8 lg:px-44'>
                <motion.h1
                variants={FadeUp(0.2)}
                initial={"hidden"}
                whileInView={"visible"} 
                className='text-3xl lg:text-5xl font-bold uppercase'>Get 20% Discount On Your First Order, Are You Ready To Buy</motion.h1>
                <motion.p
                variants={FadeUp(0.4)}
                initial={"hidden"}
                whileInView={"visible"} 

                >We will make sure you get the right and the best quality products for your workout</motion.p>
            <motion.div
            variants={FadeUp(0.6)}
            initial={"hidden"}
            whileInView={"visible"}
             className='flex justify-center gap-6'>
                <button className='primary-btn'>Learn More</button>
                <button className='py-3 px-6 rounded-md hover:!scale-110 duration-300 border-2 border-hoverColor text-hoverColor'>Stay In Touch</button>
            </motion.div>
            </div>

            





        </div>











    </div>
  )
}

export default Banner3