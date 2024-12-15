import React from 'react'
import Nav from '../components/Navbar'
import Btn from '../components/btn'

function Home() {
  return (

    <div className="overflow-x-hidden bg-hero-bg-img bg-cover bg-center xl:h-screen pb-24">
      <Nav/>
      <div className=" pt-32 p-5 md:pt-32  md:w-1/2 text-white text-wrap  flex-col justify-center ">
        <div className="lg:p-10 md:px-10 flex flex-col justify-center md:justify-start ">
          <h1 className="text-center md:text-left  text-4xl lg:text-7xl md:text-5xl font-bold leading-tight">Transform Your Vision into a Stunning Website</h1>
          <h3 className="text-center md:text-left mx-auto md:pt-6 pt-4  lg:text-xl  font-normal">At our agency, we specialize in crafting premium-quality websites that captivate and convert. Let us help you establish a powerful online presence that truly reflects your brand.</h3>
        </div>
        <div className="pt-6 md:pt-10 lg:pt-0 md:pl-10 mx-auto flex justify-center md:justify-start ">
          <Btn />
        </div>
          
      </div>
    </div>
  )
}

export default Home