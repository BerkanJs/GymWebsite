import React,{useState} from 'react'
import {TabData} from '../../MockData/data'
import {motion} from "framer-motion"
const Tabs = () => {
    const[activeTab,setActiveTab]=useState("All");
    const tabs=["All","Yoga","Calisthenics","Body Building"];
    const filteredCards=activeTab=="All"?
    TabData:TabData.filter((card)=> card.category==activeTab);

  return (
    <div className='container my-12 md:my-16'>
        {/* Tabs Button Section */}
        <div className='flex space-x-4 mb-4 p-6'>
            {tabs.map((tab)=>(
                <button className={`py-2 px-4 rounded ${
                    activeTab==tab
                    ? "bg-hoverColor"
                    : "bg-gray-200 text-gray-700"
                }`
                } key={tab} 
                onClick={()=>setActiveTab(tab)}>
                {tab}</button>



            ))}





        </div>

        {/* Tabs Card Section */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                filteredCards.map((card)=>(
                    <motion.div
                    id={card.id}
                    initial={{opacity:0,x:10}}
                    whileInView={{opacity:1,x:0}}
                
                    
                    
                    key={card.id} className='p-4 border rounded shadow-sm space-y-2'>

                        <img className='h-[240px] w-full object-cover' src={card.image} alt="" />
                        <p className='text-xl font-semibold'>{card.category}</p>
                        <p className='text-gray-500'>{card.info}</p>



                    </motion.div>

                ))
            }
        </div>






    </div>
  )
}

export default Tabs