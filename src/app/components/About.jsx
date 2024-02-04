import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>
              Know me better!
            </h2>
            <p className='py-2 text-gray-600'>I am this and that and i am doing this and that i have studied from this and that
                I will be doing this and that and i want to do this and that
            </p>
            <p className='py-2 text-gray-600'>
              Some other this and that and this and that and this and that and this and that
            </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out my projects this and that
            </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src='/potrait.jpg' width='100' height='100' alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default About
