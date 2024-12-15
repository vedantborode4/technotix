import React from 'react'
import FeatureCard from "../components/cards/FeatureCard.jsx"
import { FaRegLightbulb } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { LuRoute } from "react-icons/lu";
import Btn from '../components/btn';

function WhyUs() {
  return (
    <div className='flex flex-col overflow-x-hidden   items-center'>
      <div className="">
        <div className="text-center lg:text-2xl font-bold  mt-8">
          <h3>Why We're the Right Choice For Your Business </h3>
        </div>
        <div className="text-center text-2xl md:text-4xl font-extrabold p-4 lg:p-8 lg:pb-12">
          <h2>We don’t just build websites <br /> We create online experiences that help businesses thrive.</h2>
        </div>
      </div>
      <div className='w-screen flex justify-center pb-7'>
        <div className='grid grid-cols-1 md:grid-cols-2  max-w-4xl'>
          <FeatureCard icons= <FaRegLightbulb className='h-6 w-6'/> feature='Expertise & Innovation' featureexplanation='Our team combines years of industry experience with cutting-edge technology to deliver modern, high-performing websites.'/>
          <FeatureCard icons= <HiOutlineWrenchScrewdriver className='h-6 w-6'/>  feature='Customized Solutions' featureexplanation='Every project we take on is tailored to your unique needs, ensuring your online presence reflects your brand perfectly.'/>
          <FeatureCard icons= <LuRoute className='h-6 w-6'/> feature='End-to-End Service' featureexplanation='From design and development to maintenance and updates, we’ve got you covered every step of the way.'/>
          <FeatureCard icons= <GoGraph className='h-6 w-6'/> feature='Proven Results' featureexplanation='Our websites have helped businesses increase their engagement, generate more leads, and grow their brands'/>
          <FeatureCard icons= <FaRegHandshake className='h-6 w-6'/> feature='Client-Centric Approach' featureexplanation='Your satisfaction is our priority. We keep you involved at every stage to make sure the final product exceeds your expectations.'/>
          <FeatureCard icons= <GoPackage className='h-6 w-6'/> feature='Scalable & Future-Ready' featureexplanation='Our solutions are built to grow with your business, adapting to new trends and technologies as you expand.'/>
        </div>
      </div>
      <div> <Btn /> </div>
    </div>
  )
}

export default WhyUs