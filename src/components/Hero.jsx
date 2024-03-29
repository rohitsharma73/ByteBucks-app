import React from 'react'
import { ReactTyped} from "react-typed";
import { SignInButton } from '@clerk/clerk-react';


function Hero() {
  return (
    <div id='Hero' className='top-5'>
      <div className="text-white">
        <div className='max-w-[900px] mt-[-96px] h-screen  mx-auto text-center flex flex-col justify-center'>
          <p className='text-orange-400 text-sm font-bold p-2'>Every Bit, Worth it!!</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>ByteBucks</h1>

          <div className='flex justify-center items-center'>
            <p className='font-mono md:text-4xl sm:text-3xl text-2xl py-4'>
            BytesBucks Harvesting Innovation in &nbsp;
              <ReactTyped
              className='font-mono md:text-4xl sm:text-3xl text-2xl'
              strings={['Agriculture', 'and', 'Forestry']}
              typeSpeed={120}
              backSpeed={130}
              loop 
              />
            </p>
          </div>
          <p className='md:text-2xl text-xl text-gray-600'>BytesBucks Where digital currency meets agriculture and forestry. Explore, game, and engage while nurturing sustainability..</p>
            <SignInButton className='border w-[200px] mx-auto my-6 py-3 bg-orange-300 text-black font-bold rounded-md border-orange-500 uppercase hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out '/>          
        </div>
      </div>
    </div>
  )
}

export default Hero