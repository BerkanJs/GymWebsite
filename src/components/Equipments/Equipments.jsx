import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import{motion} from "framer-motion";
import{FadeLeft} from '../../utility/animation'


const EquipmentsData=[
    {
        id:1,
        title:"Yoga Equipments",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia, temporibus unde laboriosam maxime itaque.",
        icon:<GrYoga/>,
        delay:0.3,

    },
    {
        id:2,
        title:"Muscles Equipments",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia, temporibus unde laboriosam maxime itaque.",
        icon:<FaDumbbell/>,
        delay:0.6,

    },
    {
        id:1,
        title:"Fitness Equipments",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia, temporibus unde laboriosam maxime itaque.",
        icon:<GiGymBag/>,
        delay:0.9,

    },



]
const Equipments = () => {
  return (
    <div>
        <div className='container py-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
                <div className='space-y-4 p-6'>
                    <h1 className='text-3xl font-bold'>What we offer for you</h1>
                    <p className='text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores!</p>
                </div>
                {
                    EquipmentsData.map((item)=>{
                        return(
                            <motion.div
                            variants={FadeLeft(item.delay)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            whileHover={{scale:1.08}} 
                            className='space-y-4 p-6 bg-gray-100 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] ' key={item.id}>
                                <div className='text-4xl'>{item.icon}</div>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                                <p className='text-gray-500'>{item.desc}</p>



                            </motion.div>
                        )
                    })
                }
            </div>



        </div>





    </div>
  )
}

export default Equipments