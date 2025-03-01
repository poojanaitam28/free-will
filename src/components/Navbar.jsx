import React from 'react'
import Logo from "../assets/Logo.png"
import { LuMenu } from "react-icons/lu";

function Navbar() {
  return (
    <div className='w-full h-20 bg-slate-200 px-2 flex justify-between items-center'>
        <div>
            <img className='w-48 bg-red-20' src={Logo} alt='logo' />
        </div>
        <div>
            <LuMenu className='text-custom-pink' size={24}/>
            
        </div>
    </div>
  )
}

export default Navbar