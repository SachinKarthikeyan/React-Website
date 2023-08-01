import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Python IEEE projects
        </h1>
      
        <p className='md:text-2xl text-xl font-bold text-gray-500'>A Collection of python IEEE projects</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See More</button>
      </div>
    </div>
  );
};

export default Hero;
