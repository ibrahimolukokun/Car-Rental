import React from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'

const NavLinks= [
  { iode: "1", name: 'HOME', href: '#' },
  { id: "2", name: 'CARS', href: '#' },
  { id: "3", name: 'ABOUT', href: '#' },
  { id: "4", name: 'BOOKING', href: '#' },]

const Navbar = ({theme, setTheme}) => {
  return (
    <nav className='navbar shadow-sm bg-dark'>
    <div className='container mx-auto px-4'> 
        <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <div className='logo'>
                <h1 className='text-3xl font-bold'>Car Rental</h1>
            </div>
            {/* Navigation Links */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 '>
                    {
                        NavLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}
                                    className='py-2 text-dark hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 transition-colors duration-300'>
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* Theme Toggle Button */}
            <div className='hidden md:block'>
                {
                    theme === 'dark' ? (
                        <BiSolidSun className='text-2xl'/>
                    ):(
                        <BiSolidMoon className='text-2xl'/>
                    )
                }
                
            </div>

        </div>
    </div>
    </nav>
  )
}

export default Navbar