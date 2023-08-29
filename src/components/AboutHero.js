import React from 'react';
import background from '../assets/images/hero.jpeg';
import {RiArrowDropRightLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AboutHero() {
  return (
    <div>
      <div className='bg-[#3d3b3b] md:h-[140px] h-[150px]' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`
      }}>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-center font-bold text-white mt-10 text-[24px]'>ABOUT US</h3>
          <div className='flex mt-3'>
            <Link to={'/home'}> <p className='mt-1 text-center font-light text-white cursor-pointer '>Home</p> </Link>
            <RiArrowDropRightLine fill='white' size={30} className='mt-0' />
            <p className='mt-1 text-center font-bold text-white'>About</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
