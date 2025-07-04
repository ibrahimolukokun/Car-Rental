import React from 'react'
import CarPng from '../../assets/elevated-front.png'

const About = () => {
  return (
    <div className='bg-slate-100 dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:gird sm:place-items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            <div data-aos="fade-right"
                data-aos-duration="1500">
                <img 
                src={CarPng}
                alt='About Us'
                className='max-h-[500px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
                />
            </div>
            <div className='space-y-6 sm:p-16 pb-6'>
                <h1 
                data-aos="fade-up"
                className='text-4xl sm:text-5xl md:text-6xl font-bold '>
                    About Us
                </h1>
                <p 
                data-aos="fade-up"
                className='text-lg sm:text-xl md:text-2xl mt-4'>
                    Welcome to our car rental service! We are dedicated to providing you with a seamless and enjoyable car rental experience. 
                </p>
                <p 
                data-aos="fade-up"
                className='text-lg sm:text-xl md:text-2xl mt-4'>
                    Our fleet includes a wide range of vehicles to suit your needs, whether you're looking for a compact car for city driving or a spacious SUV for a family trip.
                </p>
                <button 
                data-aos="fade-up"
                className='button-outline'>
                    Learn More
                </button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default About