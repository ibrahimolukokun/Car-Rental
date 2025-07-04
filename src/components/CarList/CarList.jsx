import React from 'react'
import compactCar from '../../assets/compactBugatti.png'
import suvCar from '../../assets/SUV.png'
import luxCar from '../../assets/Luxury.png'

const CarData = [
  {
    id: 1,
    name: 'Compact Car',
    image: compactCar,
    description: 'A compact car perfect for city driving, offering great fuel efficiency and easy parking.',
    price: '$30/day',
    aosDelay: '0',
  },
  {
    id: 2,
    name: 'SUV',
    image: suvCar,
    description: 'A spacious SUV ideal for family trips, providing comfort and ample storage space.',
    price: '$50/day',
    aosDelay: '500',
  },
  {
    id: 3,
    name: 'Luxury Sedan',
    image: luxCar,
    description: 'A luxury sedan for those who want to travel in style and comfort.',
    price: '$80/day',
    aosDelay: '1000',
  }
]

const CarList = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container mx-auto'>
            <div>
                <h1 
                data-aos="fade-up"
                className='text-4xl sm:text-5xl md:text-6xl font-bold my-8'>
                    Our Cars
                </h1>
                <p 
                data-aos="fade-up"
                className='text-lg sm:text-xl md:text-2xl mb-8'>
                    Explore our diverse fleet of vehicles, designed to meet all your travel needs. From compact cars for city driving to spacious SUVs for family trips, we have the perfect car for you.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {
                    CarData.map((car) => (
                        <div 
                        key={car.id} 
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay={car.aosDelay}
                        className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark text-white hover:bg-secondary hover:text-white duration-300 shadow-lg rounded-lg'>
                            <img 
                                src={car.image} 
                                alt={car.name} 
                                className='w-full h-56 object-contain sm:translate-x-4 rounded-lg mb-4 p-6 group-hover:sm:translate-x-[-8] duration-700'
                            />
                            <h2 
                            adata-aos="fade-up"
                            className='text-2xl font-semibold mb-2'>
                                {car.name}
                            </h2>
                            <p 
                            data-aos="fade-up"
                            className=''>
                                {car.description}
                            </p>
                            <p 
                            data-aos="fade-up"
                            className='text-xl font-bold'>
                                {car.price}
                            </p>
                            <button 
                            data-aos="fade-up"
                            className='button mt-4'>
                                Book Now
                            </button>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>

    </div>
  )
}

export default CarList