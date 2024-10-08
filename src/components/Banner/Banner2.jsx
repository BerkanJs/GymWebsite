import React from 'react'
import Img1 from '../../img/3.png'

const Banner = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-[#f9f9f9] md:space-y-0 py-14 drop-shadow '>
         {/* img section*/}

         <div>
          <img className='w-[300px]  md:max-w-[400px] xl:min-w-[600px] h-full object-cover'
          
          src={Img1} alt="" />




         </div>







        {/* text section */}
        <div className='flex flex-col items-start gap-10 py-2 px-5  '>

          <h1 className='font-bold text-2xl lg:text-4xl text-hoverColor py-2 font-playfair'>The Importants To Take Care Of Yourself</h1>
          <p className='font-semibold font-playfair text-sm md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero quae voluptatibus non blanditiis et nesciunt alias, sed nostrum, at harum cum inventore officia, rem animi? Maxime, cumque voluptate harum quo nemo aspernatur perferendis amet fuga quia eligendi, quam accusamus facere aliquid quaerat doloremque ad sint? Ipsa, ex? Lorem ipsum dolor sit amet<br />

          consectetur, adipisicing elit. Delectus voluptatum ipsa in pariatur. Excepturi amet ipsa, odio sapiente hic alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur adipisicing elit. Laborum voluptatem eligendi blanditiis.</p>
          <button className='primary-btn'> Explore More</button>




        </div>





        </div>






      </div>






    </section>
  )
}

export default Banner