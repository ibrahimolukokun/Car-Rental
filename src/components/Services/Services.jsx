import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const skillsData = [
  {
    name: 'Best Prices',
    icon: (
        <FaCameraRetro className='text-4xl text-primary group-hover:text-black duration-300' />
    ),
    link: '#',
    description: 'We offer the best prices in the market, ensuring you get value for your money.',
    aosDelay: '0',
  },
  {
    name: 'Fast and Safe',
    icon: (
        <GiNotebook className='text-4xl text-primary group-hover:text-black duration-300' />
    ),
    link: '#',
    description: 'Our services are designed to be fast and safe, providing you with a hassle-free experience.',
    aosDelay: '500',
  },
  {
    name: 'Experienced Drivers',
    icon: (
        <SlNote className='text-4xl text-primary group-hover:text-black duration-500' />
    ),
    link: '#',
    description: 'Our drivers are highly experienced and trained to ensure your safety and comfort.',
    aosDelay: '1000',
  }
  
];

const Services = () => {
  return (
    <div className='py-14 dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='pb-12'>
                <h1 
                data-aos="fade-up"
                className='text-4xl sm:text-5xl md:text-6xl font-bold text-center my-8'>
                    Why Choose Us?
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                skillsData.map((skill) => (
                    <div
                    key={skill.name} 
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay={skillsData.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark text-white hover:bg-secondary hover:text-white duration-300 shadow-lg rounded-lg'>
                        <div className='grid place-items-center '>
                            {skill.icon}   
                        </div>
                        <h2 className='text-2xl font-semibold mb-2'>{skill.name}</h2>
                        <p className=''>{skill.description}</p>
                        <a href={skill.link}>Learn More</a>

                    </div>
                ))
                }
            </div>
        </div>

    </div>
  )
}

export default Services