import React from 'react'
import { BsCheckCircle } from 'react-icons/bs';



function AboutUs() {

    return (
        <>
            <div className='flex flex-col-reverse md:flex-row justify-center w-[100%] p-10  pl-[5%] pr-[5%] h-[100%] overflow-hidden gap-[50px] bg-[#FAF8F8]'>
                <div className='w-[100%] items-center flex md:w-[40%] rounded-sm bg-[#3d3b3b]'>
                <iframe 
                className='h-[100%] w-[100%]'
                 src="https://www.youtube.com/embed/0t80TL9HJkc" 
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>

                </iframe>
                </div>
                <div className='w-[100%] md:w-[60%] h-[100%]'>
                    <h4 className='text-[20px] font-bold mt-2 mb-5'>ABOUT US </h4>
                    <p>eTest is part of our Learning Management System (LMS) suites that offers simple registration,
                        easy test creation, signing- in, synchronized processing, secured encoding and decoding of 
                        information and more.
                    </p>

                    <div className='w-[100%] flex flex-wrap gap-[10px] mt-9'>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Assessment</h4>
                            </div>

                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Question Randomization</h4>
                            </div>

                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center  '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Automated Proctoring</h4>
                            </div>

                        </div>

                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Reporting/Analytics</h4>
                            </div>
                        </div>

                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Automatic Grading</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Surveys & Feedback</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Candidate Management</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Test scheduling</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Certification Management</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Time Limits</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Question Branching</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Weighted Questions etc...</h4>
                            </div>
                        </div>
                        <div className='w-[300px]'>
                            <div className='flex gap-[15px] items-center '>
                                <BsCheckCircle fill='#D54D3D' />
                                <h4>Question Library</h4>
                            </div>
                        </div>
                    </div>
                    <div className='mt-9'>
                        <p>eTest Computer Based Test software enables educators and trainers to author, schedule, 
                            deliver, and report on tests and exams. It is a professional computerized testing application.
                            short, it makes testing easier for students and administrators.</p>

                        <button className='bg-[#CB2310] text-white p-3 rounded-lg mt-9'>Learn More</button>
                    </div>
                </div>



            </div>

        </>
    )
}

export default AboutUs