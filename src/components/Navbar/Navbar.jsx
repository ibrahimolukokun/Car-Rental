import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar shadow-sm'>
    <div className='container'> 
        <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <div className='logo'>
                <h1 className='text-3xl font-bold'>Car Rental</h1>
            </div>
            {/* Navigation Links */}
            <div className=''>
                <ul className='flex items-center gap-4'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>

        </div>
    </div>
    </nav>
  )
}

export default Navbar