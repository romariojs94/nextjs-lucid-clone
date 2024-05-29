import React from 'react'
import Link from 'next/link';
import Logo from '../../public/logo.svg';
const Navbar = () => {
  return (
    <nav className='absolute inset-x-0 pt-5 sm:pt-0 top-0 h-16 flex gap-3 sm:gap-0 flex-wrap justify-center sm:justify-between items-center px-20 bg-gradient-to-b from-black to-black/0'>
      <Logo className="w-60" />
        {/* Links */}
        <ul className='flex gap-3 sm:gap-6'>
            <li><Link href="/">Air</Link></li>           
            <li><Link href="/">Gravity</Link></li>           
            <li><Link href="/">Experience</Link></li>           
            <li><Link href="/">Shop</Link></li>           
        </ul>
       
    </nav>
  )
  
}
export default Navbar