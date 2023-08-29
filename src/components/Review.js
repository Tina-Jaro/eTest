import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
import guyone from '../assets/images/guy1.png';
import guyTwo from '../assets/images/guy2.jpeg';
import guyThree from '../assets/images/guy3.jpeg';




const reviews = [
    {
        image: guyTwo,
        name: 'Olumide Anthony',
        content: ' According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise. ',
    },
    {
        image: guyone,
        name: 'Isaac Peters',
        content: ' According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise. ',
    },
    {
        image: guyThree,
        name: 'Abayomi Olufemi',
        content: ' According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise. ',
    },
];
const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = reviews.map((_, index) => (
        <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-black' : 'text-gray-500'
                }`}
        >
            <RxDotFilled />
        </div>
    ));
    return (
        <div className='flex flex-col justify-center overflow-hidden'>
            <div>
                <h1 className=' text-center mt-[40px] font-bold text-[20px] leading-[144.3%] '>OUR CLIENT'S REVIEWS</h1>
                <p className='text-center mb-[40px] font-medium'>
                    See what our customers are saying about us</p>
            </div>
            <div className='flex justify-center mb-9 flex-wrap'>
                {reviews.map((review, index) => (
                    <div key={index} className={` mb-6 md:mb:0 ${index === currentIndex ? 'opacity-100' : 'opacity-60'}
                    transition-opacity duration-300`}>
                        <div>
                            <div className=" relative bg-white rounded-md shadow-md p-4 m-10 w-[300px]">
                                <div>
                                    <div className='flex items-center'>  {[1, 2, 3, 4, 5].map((value) => (
                                        <FaStar key={value} className="text-yellow-400 fill-current" />
                                    ))}</div>
                                    <div className="mb-4">
                                        <p className='text-sm italic mt-4'>
                                            {review.content}
                                        </p>
                                    </div>
                                </div>
                                {/* Chat tail */}
                                <div className="absolute w-0 h-0 -bottom-2 left-1/2 transform -translate-x-1/2 bg-transparent border-t-2 border-blue-100 border-solid border-l-4 border-r-4 border-transparent mx-auto"></div>

                            </div>

                            <div>
                                <img src={review.image} className='flex justify-center  ml-[130px] mt-5' alt='boy' />
                                <h3 className='text-center text-[#D54D3D] mt-5'>{review.name}</h3>
                            </div>
                        </div>

                    </div>
                ))}

                <div className='flex justify-center  py-2 md:w-1/3'> {slides}</div>
            </div>
        </div>
    )
}

export default Review
