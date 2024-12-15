import React from 'react'
import ServicesCard from '../components/cards/servicesCard.jsx'

function Services() {
  return (
    <div className="overflow-x-hidden py-2 ">
      <div className="text-center text-2xl lg:text-3xl lg:font-bold lg:pb-8 font-bold p-4 ">
        <h3 >How We Can Help You</h3>
      </div>
      <div className="">
        <div className=" w-screen flex justify-center pb-7 container mx-auto md:px-3.5 ">
          <div className=' grid grid-cols-1 md:grid-cols-2  max-w-4xl'>
            <ServicesCard 
              service="Custom Website Design"  
              sevicedetails="Create visually stunning, user-friendly websites that reflect your brand and engage your audience."
            />
            <ServicesCard 
              service="Website Development"  
              sevicedetails="Creation of landing pages, website and online stores for small and medium size business."
            />
            <ServicesCard 
              service="Responsive Design"  
              sevicedetails="Ensure your website looks and performs on all devices, from desktop to smartphones"
            />
            <ServicesCard 
              service="UI/UX Design"  
              sevicedetails="User interface development for website and application, design system engineering."
            />
            <ServicesCard 
              service="SEO Optimization"  
              sevicedetails="Boost your visibility on search engines with our SEO-friendly design and development practices."
            />
            <ServicesCard 
              service="Ongoing Maintenance & Support"  
              sevicedetails="We provide reliable maintenance and updates to keep your website running smoothly."
            />
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Services