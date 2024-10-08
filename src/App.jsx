import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import BgImage from "./img/bg.png"
import Equipments from './components/Equipments/Equipments';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Tabs from './components/Tabs/Tabs';
import Testimonials from './components/Testimonial/Testimonials';
import Banner3 from './components/Banner/Banner3';
import Footer from './components/Footer/Footer';
function App() {
const bgStyle={

  backgroundImage:`url(${BgImage})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundAttachment:"fixed",
  
};

  return (
    <div className='overflow-x-hidden'>

      <div style={bgStyle}>

      <Navbar/>
      <Hero/>

      </div>
      <Equipments/>
      <Banner/>
      <Tabs/>
      <Banner2/>
      <Testimonials/>
      <Banner3/>
      <Footer/>

    </div>
  )
}

export default App
