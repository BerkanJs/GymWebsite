import React from 'react'
import {NavData} from "../../MockData/data";
import { FaDumbbell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import Responsive from './Responsive';

const Navbar = () => {
  const[open,setOpen]=React.useState(false);
  return (

    <nav>
      {/*Navbar Section*/}
      <div className='container flex justify-between items-center py-2'>
        {/* Logo*/}
        <div className='text-2xl flex items-center justify-center gap-2 font-bold uppercase'>
        <FaDumbbell className='text-3xl'/>
        <p>My Gym</p>
        <p className='text-hoverColor'>App.</p>

        </div>
       {/*Menu Section*/}
       <div className='hidden md:block'>
       <ul className='flex justify-center items-center gap-6 text-xl font-semibold'>
          {
            NavData.map((data)=>(
              <div key={data.id}>
              <a className='inline-block py-1 px-3 hover:text-hoverColor duration-300' href={data.link}><li>{data.title}</li></a>
              </div>
           
            ))
          }
        </ul>
        </div>
         {/*Icon Section*/}
        <div className='flex items-center justify-center gap-2'>
          <button className='text-2xl hover:bg-hoverColor hover:text-white duration-200 rounded-full p-1.5'><FaSearch /></button>
          <button className='text-2xl hover:bg-hoverColor hover:text-white duration-200 rounded-full p-1.5'><PiShoppingCart /></button>
          <button className='hover:bg-hoverColor hover:text-white duration-200 rounded-lg font-semibold px-3 py-1 hidden md:block border-2 border-hoverColor hover:border-white' >Login</button>
         {/*Hamburger Menu Section*/}

         <div onClick={()=>setOpen(!open)} className='md:hidden'>

         <IoMdMenu  className='text-4xl hover:text-hoverColor duration-300 hover:cursor-pointer'/>
         </div>



        </div>







    








      </div>

       {/*Mobile Section*/}
       <Responsive 
        open={open}/>

    </nav>

  )
}

export default Navbar