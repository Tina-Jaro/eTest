import React from 'react'
import { useState, useEffect } from 'react';
import computer from '../assets/images/computer.png';
import girl from '../assets/images/girl2.png';
import twogirls from '../assets/images/girl1.png';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

function Hero() {
    const slides = [
        {
            url: girl,
            text: `Create Computer Based Test with endless
            possibilities and very easy customization with eTest`,
        },
        {
            url: twogirls,
            text: `eTest is a Computer Based Testing software solution, 
            suitable for all schools, training centers and organizations`,
        },
        {
            url: computer,
            text: `eTest is a fit for all solution for testing a large 
            number of test takers... its to use and secure`,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='max-w-[1400px] md:h-[100vh] h-[400px] w-full m-auto  
        relative transform transition-transform duration-500 ease-in-out' id='hero'>
            <div style={{
                backgroundImage: `linear-gradient(89.89deg, 
                    rgba(16, 17, 16, 0.678) 51.03%, rgba(217, 217, 217, 0) 99.9%), url(${slides[currentIndex].url})`

            }}
                className='w-full h-full bg-center bg-cover duration-500'>
                <div className='w-[900px] left-[16%] absolute top-[25%] text-[16px] mt-10  md:mt-0 md:text-[30px] text-center font-bold flex justify-center items-center text-white'>
                    {slides[currentIndex].text}
                </div>

                {/* left arrow */}
                <div className=' hidden md:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl p-2 cursor-pointer '>
                    <BsArrowLeftCircle size={25} fill={'white'} onClick={prevSlide} className='fill-white hover:fill-[#CB2310]' />
                </div>

                {/* right arrow */}
                <div className='hidden md:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl p-2 cursor-pointer '>
                    <BsArrowRightCircle size={25} fill={'white'} onClick={nextSlide} className='fill-white hover:fill-[#CB2310]' />
                </div>
                <div className='flex flex-col m-0 justify-center items-center top-[50%] pt-[25%] cursor-pointer '>
                    <button className='flex flex-col justify-center items-center bg-white hover:bg-[#CB2310]
                 hover:text-white text-[#CB2310] ml-[-200px] md:ml-0 mt-[150px] md:mt-0
                 w-[120px] md:w-[180px] h-[30px] 3xl:w-[45%] 3xl:h-[70px] md:h-[50px] rounded-md 
                p-5 md:p-0 text-[16px] md:text-[16px] 3xl:text-[28px] 4xl:text-[32px] font-[700]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Hero


