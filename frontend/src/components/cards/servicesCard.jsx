import React from 'react'

function ServicesCard({service="web development", 
  sevicedetails="creation of landing page, website, online store for small and medium business",
  cta="contact us >"
})
{
  return (
    <div className="sm:w-96 px-2">
      <div className='flex flex-col items-start px-1 py-2 my-2 border-black border rounded-xl '>
        <h3 className='font-semibold  text-xl '>{service}</h3>
        <p className=''>{sevicedetails}</p>
        <div className="px-1">
          <button className='border-black border px-2 pb-1  mt-2 rounded-xl self-center hover:bg-purple-100  hover:font-medium hover:border-2 '
           onClick={"to be handle"} 
          >{cta}
          </button>
        </div>
      </div>
    </div>

  )
}

export default ServicesCard