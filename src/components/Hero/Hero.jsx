import React from 'react'
import CarPng from '../../assets/car.png'
import nHCarPng from '../../assets/lavoiturenoire-og.png'

const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
        <div className='container mx-auto min-h-[820px] flex'>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                {/* Hero Image */}
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500"
                className='order-1 sm:order-2'>
                    <img 
                        src={theme === 'dark' ? CarPng : nHCarPng} //
                        alt="Car"
                        className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
                    />
                </div>
                {/* Hero Text */}
                <div className='order-2 sm:order-1 space-y-6 sm:pr-32'>
                    <p 
                    data-aos="fade-up"
                    className='text-primary text-2xl'>Effortless
                    </p>
                    <h1 
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className='text-4xl sm:text-5xl md:text-6xl font-bold'>Car Rental
                    </h1>
                    <p 
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className='text-lg sm:text-xl md:text-2xl mt-4'>  Experience the freedom of the open road with our premium car rental service. Whether you're planning a weekend getaway or a business trip, we have the perfect vehicle for you.
                    </p>

                    <button 
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className='button'>
                        Book Now
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero