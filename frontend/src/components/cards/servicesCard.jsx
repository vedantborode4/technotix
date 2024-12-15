import React from 'react';

function ServicesCard({
  service = "web development",
  sevicedetails = "creation of landing page, website, online store for small and medium business",
  cta = "Contact us >"
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg m-6 hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex flex-col items-start px-4 py-2 my-2 rounded-lg bg-white">
        <h3 className="font-semibold text-xl">{service}</h3>
        <p>{sevicedetails}</p>
        <div>
          <button
            className="border-black border px-2 pb-1 mt-2 rounded-lg  hover:bg-purple-500 hover:text-white hover:font-medium hover:border-purple-800 hover:bottom-0"
            onClick={() => console.log("Button clicked!")}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
