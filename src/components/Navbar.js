
import React, { useState } from 'react';
import logo from '../assets/images/eTest-Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Features',
    link: '#'
  },
  {
    title: 'Blog',
    link: '#'
  },
  {
    title: 'Contact',
    link: '#'
  },
]
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className='bg-white'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <img src={logo} alt='logo' />
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-12 gap-10 font-bold '>
              {navLinks.map((link, index) => (
                <a key={index} className='relative after:absolute after:w-3 after:left-0
                after:bottom-3 after:bg-[#D54D3D]' 
                href={link.link}>
                  {link.title}</a>
              ))}
              <button className='joinUsBtn  4xl:text-[30px] bg-[#CB2310] p-2 rounded text-white  w-[100px]'>
                Join us</button>
            </div>
          </div>

          <div className='mr-2 flex md:hidden'>
            <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md'>
              <span className='sr-only'>
              </span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      {open ? (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {navLinks.map((link, index) => (
                <a key={index} 
                className='block px-3 py-2 text-[#535252] hover:text-[#D54D3D] hover:border-b-2 hover:border-[#D54D3D]'
                 href={link.link}>
                  {link.title}</a>
              ))}
              <button className='joinUsBtn  4xl:text-[30px] bg-[#CB2310] p-2 rounded text-white  w-[100px]'>Join us</button>
          </div>
        </div>
      ) : null}
    </div>

  )
}

export default Navbar



