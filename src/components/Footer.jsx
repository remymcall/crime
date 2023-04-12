import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-blue-500'>
        <div>
        <h1 className='w-full text-3xl font-bold text-white'>CRM</h1>
        <p className='py-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, 
        vel. Nisi quia sit, nemo quidem excepturi temporibus eveniet reprehenderit et praesentium rem assumenda,
         sint ipsa, omnis quas? Repellendus, laboriosam aspernatur!</p>
         <div className='flex justify-between md-w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
         </div>
        </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-black'>Guidence</h6>
            <ul>
                <li className='py-2 text-sm text-white'>Analysing</li>
                <li className='py-2 text-sm text-white'>Coding</li>
                <li className='py-2 text-sm text-white'>Debugging</li>
                <li className='py-2 text-sm text-white'>Implementation</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Support</h6>
            <ul>
                <li className='py-2 text-sm text-white'>Analysing</li>
                <li className='py-2 text-sm text-white'>Coding</li>
                <li className='py-2 text-sm text-white'>Documentation</li>
                <li className='py-2 text-sm text-white'>API status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Company</h6>
            <ul>
                <li className='py-2 text-sm text-white'>About</li>
                <li className='py-2 text-sm text-white'>Blog</li>
                <li className='py-2 text-sm text-white'>Jobs</li>
                <li className='py-2 text-sm text-white'>Press</li>
                <li className='py-2 text-sm text-white'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Legal</h6>
            <ul>
                <li className='py-2 text-sm text-white'>Claims</li>
                <li className='py-2 text-sm text-white'>Policy</li>
                <li className='py-2 text-sm text-white'>Terms</li>
                <li className='py-2 text-sm text-white'>Insights</li> text-white
                <li className='py-2 text-sm text-white'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Legal</h6>
            <ul>
                <li className='py-2 text-sm text-white'>Claims</li>
                <li className='py-2 text-sm text-white'>Policy</li>
                <li className='py-2 text-sm text-white'>Terms</li>
                <li className='py-2 text-sm text-white'>Insights</li>
                <li className='py-2 text-sm text-white'>Careers</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
