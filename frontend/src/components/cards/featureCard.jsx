import React from 'react'

function FeatureCard({icons="<icon/>", feature="customised" , featureexplanation="details"}) {
  return (
    <div className="sm:w-96 px-2">
      <div className="flex flex-col items-start px-1 py-2 my-2 border-black border rounded-xl ">
        <div className="flex">
          <div className="mt-2 ml-1 mr-2">
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