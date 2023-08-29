import React from 'react';
import graph from '../assets/images/graph.png';
import study from '../assets/images/study.png';
import calculator from '../assets/images/calculator.png';


function News() {
    return (
        <div className='bg-[#FAF8F8] pb-12 flex flex-col gap-[20px] pl-[5%] pr-[5%] h-auto overflow-hidden'>
            <div className='w-[100%]'>
                <div className='w-[100%] mt-[20px]'>
                    <div>
                        <h1 className=' text-center mt-[40px]  font-bold text-[20px] leading-[144.3%]'>LATEST NEWS</h1>
                        <p className='text-center text-[14px]  mt-3 mb-10 font-medium md:mb-[70px]'>Launch your campaign and benefit from our expertise on designing and managing 
                            conversion centered bootstrap v5 html page.</p>
                    </div>
                    <div className='w-[100%] flex flex-wrap justify-center gap-[67px]'>
                        <div className=" w-[300px] cursor-pointer rounded overflow-hidden shadow-lg">
                            <div className='flex gap-[15px] align-center w-[100%]'>
                                <img src={graph} className="w-[100%]" alt="Sunset in the mountains" />
                            </div>
                            <div className="p-5">
                                <div className="mt-10 font-semibold text-[16px] mb-2">The Downside Of Examination <br /> Malpractise</div>
                                <p className="text-gray-700 text-base">
                                    The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.
                                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
                                </p>
                                <p className='flex text-[14px] mt-4 font-medium'>Read More</p>
                            </div>

                        </div>

                        <div className=" w-[300px] cursor-pointer rounded overflow-hidden shadow-lg">
                            <div className='flex gap-[15px] align-center w-[100%]'>
                                <img src={study} className="w-[100%]" alt="Sunset in the mountains" />
                            </div>
                            <div className="p-5">
                                <div className="mt-10 font-semibold text-[16px] mb-2 ">Building Your Corporate Identity</div>
                                <p className="text-gray-700 text-base">
                                    The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.
                                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
                                </p>
                                <p className='flex text-[14px] mt-9 font-medium'>Read More</p>
                            </div>

                        </div>

                        <div className=" w-[300px] cursor-pointer rounded overflow-hidden shadow-lg">
                            <div className='flex gap-[15px] align-center w-[100%]'>
                                <img src={calculator} className="w-[100%]" alt="Sunset in the mountains" />
                            </div>
                            <div className="p-5">
                                <div className="mt-10 font-semibold text-[16px] mb-2">The Right Hand of business in the I.T World</div>
                                <p className="text-gray-700 text-base">
                                    The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.
                                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
                                </p>
                                <p className='flex text-[14px] mt-4 font-medium'>Read More</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
