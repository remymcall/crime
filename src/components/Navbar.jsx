import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between bg-blue-600 items-center h-24 mx-w-[1240px] mx-auto px-24 top-0  sticky'>
   
      <h1 className='w-full text-3xl font-bold text-white'>CRS</h1>
      <ul className='hidden md:flex text-white text-2xl'>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300'>Home</li>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300'>About</li>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300'>Report</li>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300'>Violence</li>
        <li className='p-4 hover:bg-blue-600 scale-105 duration-300 font-medium rounded-lg'>Register</li>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed top-0 left-0 w-[60%] h-full border-r-gray-900 bg-blue-300' : 'fixed left-[-100%] ease-in-out duration-500'} >
      <h1 className='w-full text-3xl font-bold text-blaCK '>CRS.</h1>
        <ul className='pt-24 uppercase'>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300 font-medium rounded-lg'>Home</li>
        <li className='p-4 hover:text-blue-600 scale-105 font-medium duration-300'>About</li>
        <li className='p-4 hover:text-blue-600 scale-105 font-medium duration-300'>Report</li>
        <li className='p-4 hover:text-blue-600 scale-105 duration-300'>Violence</li>
        <li className='p-4 hover:bg-blue-600 scale-105 duration-300 font-medium rounded-lg'>Register</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
