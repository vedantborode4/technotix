import React from 'react'

function FeatureCard({icons="<icon/>", feature="customised" , featureexplanation="details"}) {
  return (
    <div className="">
      <div className="flex flex-col p-4 items-start  bg-white rounded-lg  shadow-lg m-6 hover:shadow-xl transition duration-300 ease-in-out  hover:-translate-y-1  ">
        <div className="flex pb-2 ">
          <div className="mt-2  mr-2">
            {icons}
          </div>
          <div className="font-semibold  text-xl mt-1 ">
            <h3>{feature}</h3>
          </div>
        </div>
        <div className="">
          <p>{featureexplanation}</p>
        </div>
      </div>
    </div>

  )
}

export default FeatureCard