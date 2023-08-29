import React from 'react'
import Vector from '../assets/images/Vector.png'
import certificate from '../assets/images/certificate.png'
import time from '../assets/images/time.png'
import question from '../assets/images/question.png'
import grading from '../assets/images/grading.png'


function Features() {

    return (
        <div className='pb-[32px] flex flex-col gap-[20px] pl-5 pr-5 overflow-hidden'>
            <div className='w-[100%]'>
                <div className='w-[100%] mt-[20px]'>
                    <div>
                        <h1 className=' text-center mt-[50px]  font-bold text-[20px] leading-[144.3%]'>OUR FEATURES</h1>
                        <p className='text-center md:mb-[70px] mt-3 text-[16px] font-medium'>eTest CBT Solution Comes With Amazing features listed below.</p>
                    </div>
                    <div className='w-full flex flex-wrap justify-center gap-[67px]'>
                        <div className='w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={Vector} className='h-30 w-30 block m-auto'  alt=''/>
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>AUTOMATED PROCTORING </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>Monitor students during <br />
                                    exams and allows them to test <br />
                                    from the comfort of their own <br />
                                    home. The system ensures that <br />
                                    test integrity is maintained through <br />
                                    the use of web cameras and <br />
                                    screen monitoring software. The <br />
                                    system also includes identity <br />
                                    verification using images of the <br />
                                    student and their photo id that are <br />
                                    captured for review by the course< br />
                                    instructor
                                </p>
                            </div>
                        </div>

                        <div className='w-[300px] h-[400px] p-[30px] mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={grading} className='h-30 w-30 block m-auto' alt=''/>
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>AUTOMATED GRADING </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                Automatic grading system allows <br />
                                students receive immediate <br /> 
                                feedback after taking and <br />
                                submitting the test electronically. <br />
                                 Students can learn from the <br />
                                 mistakes and resubmit the test <br />
                                 depending on the access given by <br />
                                  the test author. The students will <br />
                                  be able to learn better through <br />
                                   “trial and error”
                                </p>
                            </div>
                        </div>

                        <div className='w-[300px] h-[400px] p-[30px] mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={Vector} className='h-30 w-30 block m-auto' alt=''/>
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>CANDIDATE MANAGEMENT </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                Manage your candidates <br/>
                                 effectively by tracking their  <br/>
                                 progress across test stages. From <br/>
                                  registration to result delivery and <br/>
                                   reporting. eTest allows you to <br/>
                                   easily flow through and manage <br/>
                                    your candidates throughout the <br/>
                                     examination lifecycle.
                                </p>
                            </div>
                        </div>

                        <div className='w-[300px] h-[400px] p-[30px] mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={certificate} className='h-30 w-30 block m-auto' alt=''/>
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>CERTIFICATION MANAGEMENT</h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                Put your certification processes <br/>
                                 on autopilot. Centralize data and <br />
                                  documents. Integrate systems. <br />
                                  Improve data accuracy. Reduce <br />
                                  paper handling. Minimize <br />
                                  repetitive phone calls and emails. <br />
                                   Make it faster and easier for your <br />
                                    certificants to acquire and <br />
                                    maintain certification.
                                </p>
                            </div>
                        </div>

                        <div className='w-[300px] h-[400px] p-[30px] mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={time} className='h-30 w-30 block m-auto' alt='' />
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>TEST SCHEDULING</h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                The Scheduling module provides a <br/>
                                tool for test organizational <br />
                                 management to create and validate <br />
                                 schedules for all aspects of new <br/>
                                  Test Requests and to track. Be sure <br />
                                  to schedule your exam session as <br/>
                                  far in advance as possible to <br/>
                                  secure your desired exam date.
                                </p>
                            </div>
                        </div>

                        <div className='w-[300px] h-[400px] p-[30px] mt-[10px] shadow-xl cursor-pointer'>
                            <div className='flex gap-15 items-center w-full'>
                                <div className='w-fit m-auto'>
                                    <img src={question} className='h-30 w-30 block m-auto' alt='' />
                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>QUESTION BRANCHING </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                Question branching lets you control <br/>
                                 which questions your participants <br />
                                  see based on their responses to <br/>
                                   previous questions. The question <br/>
                                    branch quantifier can be one of <br />
                                     two things: if any of these <br/> 
                                     conditions are met or if all of these <br />
                                      conditions are met.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features