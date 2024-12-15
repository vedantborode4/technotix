import React from 'react'
import logo from "../assets/img/Logo1.png"

function Logo() {
  return (
    <div >
      <img src={logo} alt="Technotix logo" className="h-8 w-15 md:h-10  rounded-lg mt-1"/>
    </div>
  )
}

export default Logo