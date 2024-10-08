import React from 'react'
import {TestimonialData} from '../../MockData/data'
import Slider from "react-slick";
import{motion} from "framer-motion";
import{FadeLeft} from '../../utility/animation'
const Testimonials = () => {

    const setting={

      dots: true,
      arrow:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      cssEase:"Linear",
      pauseOnHover:true,
      pauseOnFocus:true,
      responsive:[
        {
          breakpoint:10000,
          settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true,

          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow:2,
            slidesToScroll:1,
            infinite:2,

          },
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
           

          },
        },

      ]

    }
    


  return (
    <div className='py-14 mb-10'>
      <div className="container">

        {/*Header Section */}
        <div className='text-left mb-10 max-w-[500px] space-y-2 mr-auto'>
          <h1 className='text-4xl font-bold'>What Are The Costumer Saying About Us</h1>

        </div>

         {/*Testimonial Section */}
         <div>
          <Slider {...setting}>
            {TestimonialData.map((data)=>(
              <div key={data.id}>
                <motion.div 
                variants={FadeLeft(0.4)}
                initial={"hidden"}
                whileInView={"visible"}
                whileHover={{scale:1.08}} 
                 
                className='flex flex-col gap-4 p-8 shadow-lg mx-4 my-3 rounded-xl bg-hoverColor/10'>
                  <div className="flex justify-start items-center gap-5">
                    <img className=' object-cover rounded-full w-16 h-16' src={data.img} alt="" />
                    <div>
                    <p className='text-xl font-bold text-black/80'>{data.name}</p>
                    <p className='text-clip'>{data.name}</p>



                  </div>



                  </div>
                  <div className='py-6 space-y-4'>
                    <p className='text-sm text-gray-500'>{data.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                  


                </motion.div>




              </div>
            ))}


          </Slider>



         </div>

      





      </div>








    </div>
  )
}

export default Testimonials