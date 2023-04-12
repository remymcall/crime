import React from 'react'
import './styles.css'
import Typed from 'react-typed';
function Hero() {
  return (
    <div className='text-black bg-rectangle1 bg-no-repeat bg-cover wrap'>
        <div className='mx-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-start'>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    Crime Report System:
        </h1>
    <div className='flex justify-center items-center mt-9'> 
        <p className='md:text-5xl sm:text-4xl text-xl font-bold '>
        Reflections of Crime:
            </p>
        <Typed 
        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
        strings={['Justice', 'HOPE', 'PEACE']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop/>
    </div>
        <button className='bg-blue-600 w-[299px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Learn More</button>
        </div>
    </div>
    
  )
}

export default Hero;
