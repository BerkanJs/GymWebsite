import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import {NavData} from "../../MockData/data"

const Responsive = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {

            open&&(

                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-100}}
                transition={{duration:0.3}}
                className=' md:hidden absolute top-20 left-0 w-full h-screen  text-white z-20' 
                >
                    <div  className='text-xl font-semibold uppercase bg-hoverColor py-10 m-6 rounded-3xl'>
                        {
                            NavData.map((data)=>(
                                <div className='flex flex-col items-center justify-center'
                                key={data.id}>
                                    <ul className='w-full text-center'><a href={data.link}> <li className='py-2 hover:text-secondary duration-100 border-b-2  '>{data.title}</li></a></ul>


                                </div>
                            ))

                        }
                        




                    </div>






                </motion.div>




            )






        }





    </AnimatePresence>
  )
}

export default Responsive