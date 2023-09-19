import React from 'react'
import Vector from '../assets/images/Vector.png'
import certificate from '../assets/images/certificate.png'
import time from '../assets/images/time.png'
import question from '../assets/images/question.png'
import grading from '../assets/images/grading.png'



function Features() {

    return (
        <div className='pb-[32px] flex flex-col gap-[20px] pl-5 pr-5 overflow-hidden' id='features'>
            <div className='w-[100%]'>
                <div className='w-[100%] mt-[20px]'>
                    <div>
                        <h1 className=' text-center mt-[50px]  font-bold text-[20px] leading-[144.3%]'>OUR FEATURES</h1>
                        <p className='text-center md:mb-[70px] mt-3 text-[16px] font-medium'>eTest CBT Solution Comes With Amazing features listed below.</p>
                    </div>
                    <div className='w-full flex flex-wrap justify-center gap-[67px] '>
                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28 9V3H22V5H12V2C11.9995 1.46973 11.7886 0.961329 11.4136 0.586371C11.0387
                                        0.211413 10.5303 0.000529477 10 0H2C1.46973 0.000529477 0.961329 0.211413 0.586371 
                                        0.586371C0.211413 0.961329 0.000529477 1.46973 0 2V10C0.000529477 10.5303 0.211413 
                                        11.0387 0.586371 11.4136C0.961329 11.7886 1.46973 11.9995 2 12H10C10.5303 11.9995 11.0387 11.7886 11.4136 11.4136C11.7886 11.0387 11.9995 10.5303 12 10V7C12.7954 7.00079 13.558 7.31712 14.1204 7.87956C14.6829 8.44199 14.9992 9.20459 15 10V19H9V17H3V23H9V21H15V23C15.0005 23.5303 15.2114 24.0387 15.5864 24.4136C15.9613 24.7886 16.4697 24.9995 17 25H22V27H28V21H22V23H17V16H22V18H28V12H22V14H17V10C16.9963 8.9147 16.6362 7.86066 15.975 7H22V9H28ZM2 10V2H10V10H2ZM7 21H5V19H7V21ZM24 23H26V25H24V23ZM24 14H26V16H24V14ZM24 5H26V7H24V5Z" />
                                    </svg>

                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>AUTOMATED PROCTORING </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                    Monitor students during <br />
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

                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 6.22222H27V9.33333H0V6.22222ZM0 15.5556H27V12.4444H0V15.5556ZM0 21.7778H11.8125V18.6667H0V21.7778ZM0 28H11.8125V24.8889H0V28ZM19.2544 23.5978L16.875 21.3889L14.4956 23.5822L19.2544 28L27 20.8756L24.6038 18.6667L19.2544 23.5978ZM0 0V3.11111H27V0H0Z" />
                                    </svg>

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

                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.35484C0 2.46508 0.357575 1.61176 0.994062 0.982609C1.63055 0.353455 2.49381 0 3.39394 0H23.7576C24.6577 0 25.521 0.353455 26.1575 0.982609C26.7939 1.61176 27.1515 2.46508 27.1515 3.35484V8.632C26.64 8.17935 26.0693 7.79682 25.4545 7.49471V3.35484C25.4545 2.90996 25.2758 2.4833 24.9575 2.16872C24.6393 1.85415 24.2076 1.67742 23.7576 1.67742H3.39394C2.94388 1.67742 2.51224 1.85415 2.194 2.16872C1.87576 2.4833 1.69697 2.90996 1.69697 3.35484V16.7742C1.69697 17.2191 1.87576 17.6457 2.194 17.9603C2.51224 18.2749 2.94388 18.4516 3.39394 18.4516H15.7105C15.8395 18.6412 15.977 18.8257 16.1212 19.0035V20.129H3.39394C2.49381 20.129 1.63055 19.7756 0.994062 19.1464C0.357575 18.5173 0 17.664 0 16.7742V3.35484ZM28 14.2581C28 15.8583 27.3535 17.3076 26.303 18.3677V25.1613C26.303 25.317 26.2592 25.4697 26.1763 25.6022C26.0935 25.7347 25.9749 25.8418 25.834 25.9115C25.6931 25.9811 25.5353 26.0106 25.3783 25.9966C25.2214 25.9826 25.0715 25.9257 24.9455 25.8323L22.5697 24.071C22.4228 23.9621 22.2442 23.9032 22.0606 23.9032C21.877 23.9032 21.6984 23.9621 21.5515 24.071L19.1758 25.8323C19.0497 25.9257 18.8998 25.9826 18.7429 25.9966C18.5859 26.0106 18.4282 25.9811 18.2872 25.9115C18.1463 25.8418 18.0277 25.7347 17.9449 25.6022C17.8621 25.4697 17.8182 25.317 17.8182 25.1613V18.3677C17.1364 17.6799 16.6363 16.8369 16.3618 15.913C16.0874 14.9891 16.047 14.0127 16.2443 13.0697C16.4416 12.1268 16.8706 11.2463 17.4933 10.5058C18.116 9.76533 18.9135 9.18764 19.8153 8.82362C20.7172 8.45961 21.6958 8.32045 22.6648 8.41841C23.6339 8.51638 24.5638 8.84845 25.3724 9.38537C26.181 9.92229 26.8437 10.6476 27.3019 11.4973C27.7601 12.347 27.9999 13.2951 28 14.2581ZM22.0606 20.129C21.1493 20.129 20.2873 19.9277 19.5152 19.5637V23.0645L21.6245 21.8132C21.7563 21.7351 21.907 21.6939 22.0606 21.6939C22.2142 21.6939 22.365 21.7351 22.4967 21.8132L24.6061 23.0645V19.5637C23.8107 19.9371 22.9411 20.1302 22.0606 20.129ZM22.0606 18.4516C23.1858 18.4516 24.2648 18.0098 25.0605 17.2234C25.8561 16.4369 26.303 15.3703 26.303 14.2581C26.303 13.1459 25.8561 12.0792 25.0605 11.2928C24.2648 10.5063 23.1858 10.0645 22.0606 10.0645C20.9354 10.0645 19.8564 10.5063 19.0608 11.2928C18.2652 12.0792 17.8182 13.1459 17.8182 14.2581C17.8182 15.3703 18.2652 16.4369 19.0608 17.2234C19.8564 18.0098 20.9354 18.4516 22.0606 18.4516ZM5.09091 5.87097C5.09091 5.64853 5.1803 5.4352 5.33943 5.27791C5.49855 5.12062 5.71436 5.03226 5.93939 5.03226H21.2121C21.4372 5.03226 21.653 5.12062 21.8121 5.27791C21.9712 5.4352 22.0606 5.64853 22.0606 5.87097C22.0606 6.09341 21.9712 6.30674 21.8121 6.46402C21.653 6.62131 21.4372 6.70968 21.2121 6.70968H5.93939C5.71436 6.70968 5.49855 6.62131 5.33943 6.46402C5.1803 6.30674 5.09091 6.09341 5.09091 5.87097ZM5.93939 13.4194C5.71436 13.4194 5.49855 13.5077 5.33943 13.665C5.1803 13.8223 5.09091 14.0356 5.09091 14.2581C5.09091 14.4805 5.1803 14.6938 5.33943 14.8511C5.49855 15.0084 5.71436 15.0968 5.93939 15.0968H12.7273C12.9523 15.0968 13.1681 15.0084 13.3272 14.8511C13.4864 14.6938 13.5758 14.4805 13.5758 14.2581C13.5758 14.0356 13.4864 13.8223 13.3272 13.665C13.1681 13.5077 12.9523 13.4194 12.7273 13.4194H5.93939Z"/>
                                    </svg>

                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>CANDIDATE MANAGEMENT </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                    Manage your candidates <br />
                                    effectively by tracking their  <br />
                                    progress across test stages. From <br />
                                    registration to result delivery and <br />
                                    reporting. eTest allows you to <br />
                                    easily flow through and manage <br />
                                    your candidates throughout the <br />
                                    examination lifecycle.
                                </p>
                            </div>
                        </div>
                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.35484C0 2.46508 0.357575 1.61176 0.994062 0.982609C1.63055 0.353455 2.49381 0 3.39394 0H23.7576C24.6577 0 25.521 0.353455 26.1575 0.982609C26.7939 1.61176 27.1515 2.46508 27.1515 3.35484V8.632C26.64 8.17935 26.0693 7.79682 25.4545 7.49471V3.35484C25.4545 2.90996 25.2758 2.4833 24.9575 2.16872C24.6393 1.85415 24.2076 1.67742 23.7576 1.67742H3.39394C2.94388 1.67742 2.51224 1.85415 2.194 2.16872C1.87576 2.4833 1.69697 2.90996 1.69697 3.35484V16.7742C1.69697 17.2191 1.87576 17.6457 2.194 17.9603C2.51224 18.2749 2.94388 18.4516 3.39394 18.4516H15.7105C15.8395 18.6412 15.977 18.8257 16.1212 19.0035V20.129H3.39394C2.49381 20.129 1.63055 19.7756 0.994062 19.1464C0.357575 18.5173 0 17.664 0 16.7742V3.35484ZM28 14.2581C28 15.8583 27.3535 17.3076 26.303 18.3677V25.1613C26.303 25.317 26.2592 25.4697 26.1763 25.6022C26.0935 25.7347 25.9749 25.8418 25.834 25.9115C25.6931 25.9811 25.5353 26.0106 25.3783 25.9966C25.2214 25.9826 25.0715 25.9257 24.9455 25.8323L22.5697 24.071C22.4228 23.9621 22.2442 23.9032 22.0606 23.9032C21.877 23.9032 21.6984 23.9621 21.5515 24.071L19.1758 25.8323C19.0497 25.9257 18.8998 25.9826 18.7429 25.9966C18.5859 26.0106 18.4282 25.9811 18.2872 25.9115C18.1463 25.8418 18.0277 25.7347 17.9449 25.6022C17.8621 25.4697 17.8182 25.317 17.8182 25.1613V18.3677C17.1364 17.6799 16.6363 16.8369 16.3618 15.913C16.0874 14.9891 16.047 14.0127 16.2443 13.0697C16.4416 12.1268 16.8706 11.2463 17.4933 10.5058C18.116 9.76533 18.9135 9.18764 19.8153 8.82362C20.7172 8.45961 21.6958 8.32045 22.6648 8.41841C23.6339 8.51638 24.5638 8.84845 25.3724 9.38537C26.181 9.92229 26.8437 10.6476 27.3019 11.4973C27.7601 12.347 27.9999 13.2951 28 14.2581ZM22.0606 20.129C21.1493 20.129 20.2873 19.9277 19.5152 19.5637V23.0645L21.6245 21.8132C21.7563 21.7351 21.907 21.6939 22.0606 21.6939C22.2142 21.6939 22.365 21.7351 22.4967 21.8132L24.6061 23.0645V19.5637C23.8107 19.9371 22.9411 20.1302 22.0606 20.129ZM22.0606 18.4516C23.1858 18.4516 24.2648 18.0098 25.0605 17.2234C25.8561 16.4369 26.303 15.3703 26.303 14.2581C26.303 13.1459 25.8561 12.0792 25.0605 11.2928C24.2648 10.5063 23.1858 10.0645 22.0606 10.0645C20.9354 10.0645 19.8564 10.5063 19.0608 11.2928C18.2652 12.0792 17.8182 13.1459 17.8182 14.2581C17.8182 15.3703 18.2652 16.4369 19.0608 17.2234C19.8564 18.0098 20.9354 18.4516 22.0606 18.4516ZM5.09091 5.87097C5.09091 5.64853 5.1803 5.4352 5.33943 5.27791C5.49855 5.12062 5.71436 5.03226 5.93939 5.03226H21.2121C21.4372 5.03226 21.653 5.12062 21.8121 5.27791C21.9712 5.4352 22.0606 5.64853 22.0606 5.87097C22.0606 6.09341 21.9712 6.30674 21.8121 6.46402C21.653 6.62131 21.4372 6.70968 21.2121 6.70968H5.93939C5.71436 6.70968 5.49855 6.62131 5.33943 6.46402C5.1803 6.30674 5.09091 6.09341 5.09091 5.87097ZM5.93939 13.4194C5.71436 13.4194 5.49855 13.5077 5.33943 13.665C5.1803 13.8223 5.09091 14.0356 5.09091 14.2581C5.09091 14.4805 5.1803 14.6938 5.33943 14.8511C5.49855 15.0084 5.71436 15.0968 5.93939 15.0968H12.7273C12.9523 15.0968 13.1681 15.0084 13.3272 14.8511C13.4864 14.6938 13.5758 14.4805 13.5758 14.2581C13.5758 14.0356 13.4864 13.8223 13.3272 13.665C13.1681 13.5077 12.9523 13.4194 12.7273 13.4194H5.93939Z"/>
                                    </svg>

                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>CERTIFICATION MANAGEMENT</h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                    Put your certification processes <br />
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

                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
<path d="M17.675 19.635C17.9317 19.8917 18.2467 20.02 18.62 20.02C18.9933 20.02 19.32 19.88 19.6 19.6C19.8567 19.3433 19.985 19.0167 19.985 18.62C19.985 18.2233 19.8567 17.8967 19.6 17.64L15.4 13.44V8.365C15.4 7.96833 15.2661 7.64167 14.9982 7.385C14.7294 7.12833 14.3967 7 14 7C13.6033 7 13.2711 7.13393 13.0032 7.4018C12.7344 7.6706 12.6 8.00333 12.6 8.4V13.965C12.6 14.1517 12.635 14.3323 12.705 14.5068C12.775 14.6823 12.88 14.84 13.02 14.98L17.675 19.635ZM14 28C12.0633 28 10.2433 27.6323 8.54 26.8968C6.83667 26.1623 5.355 25.165 4.095 23.905C2.835 22.645 1.83773 21.1633 1.1032 19.46C0.367733 17.7567 0 15.9367 0 14C0 12.0633 0.367733 10.2433 1.1032 8.54C1.83773 6.83667 2.835 5.355 4.095 4.095C5.355 2.835 6.83667 1.83727 8.54 1.1018C10.2433 0.367267 12.0633 0 14 0C15.9367 0 17.7567 0.367267 19.46 1.1018C21.1633 1.83727 22.645 2.835 23.905 4.095C25.165 5.355 26.1623 6.83667 26.8968 8.54C27.6323 10.2433 28 12.0633 28 14C28 15.9367 27.6323 17.7567 26.8968 19.46C26.1623 21.1633 25.165 22.645 23.905 23.905C22.645 25.165 21.1633 26.1623 19.46 26.8968C17.7567 27.6323 15.9367 28 14 28ZM14 25.2C17.1033 25.2 19.7461 24.1094 21.9282 21.9282C24.1094 19.7461 25.2 17.1033 25.2 14C25.2 10.8967 24.1094 8.25393 21.9282 6.0718C19.7461 3.8906 17.1033 2.8 14 2.8C10.8967 2.8 8.2544 3.8906 6.0732 6.0718C3.89107 8.25393 2.8 10.8967 2.8 14C2.8 17.1033 3.89107 19.7461 6.0732 21.9282C8.2544 24.1094 10.8967 25.2 14 25.2Z" />
                                    </svg>

                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>TEST SCHEDULING</h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                    The Scheduling module provides a <br />
                                    tool for test organizational <br />
                                    management to create and validate <br />
                                    schedules for all aspects of new <br />
                                    Test Requests and to track. Be sure <br />
                                    to schedule your exam session as <br />
                                    far in advance as possible to <br />
                                    secure your desired exam date.
                                </p>
                            </div>
                        </div>

                       
                        <div className=' group w-[300px] h-[400px] p-[30px] mt-10 md:mt-[10px] shadow-xl cursor-pointer relative bg-white'>
                            <div className='flex gap-15 items-center w-full relative'>
                                <div className="group-hover:bg-[#D54D3D] relative w-20 h-20 shadow-lg transform rotate-45
                                 bg-white flex justify-center items-center mt-[-50px] hover:bg-[#D54D3D] ">
                                    <svg className='fill-[#D54D3D] group-hover:fill-white h-[30px] w-[30px] transform -rotate-45' viewBox="0 0 28 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6 22.4H15.4V19.6H12.6V22.4ZM14 0C12.1615 0 10.341 0.362121 8.64243 1.06569C6.94387 1.76925 5.40053 2.80048 4.1005 4.1005C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.1005 23.8995C5.40053 25.1995 6.94387 26.2307 8.64243 26.9343C10.341 27.6379 12.1615 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40053 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.362121 15.8385 0 14 0ZM14 25.2C7.826 25.2 2.8 20.174 2.8 14C2.8 7.826 7.826 2.8 14 2.8C20.174 2.8 25.2 7.826 25.2 14C25.2 20.174 20.174 25.2 14 25.2ZM14 5.6C12.5148 5.6 11.0904 6.19 10.0402 7.2402C8.99 8.29041 8.4 9.71479 8.4 11.2H11.2C11.2 10.4574 11.495 9.7452 12.0201 9.2201C12.5452 8.695 13.2574 8.4 14 8.4C14.7426 8.4 15.4548 8.695 15.9799 9.2201C16.505 9.7452 16.8 10.4574 16.8 11.2C16.8 14 12.6 13.65 12.6 18.2H15.4C15.4 15.05 19.6 14.7 19.6 11.2C19.6 9.71479 19.01 8.29041 17.9598 7.2402C16.9096 6.19 15.4852 5.6 14 5.6Z" />
                                    </svg>

                                </div>
                            </div>

                            <div>
                                <h3 className='mt-10 font-daxlinepro-light font-bold text-16 leading-[144.3%] text-gray-700 text-center'>QUESTION BRANCHING </h3>
                                <p className='text-[15px] text-left mt-[10px] font-light text-15 leading-[144.3%] text-gray-700 '>
                                    Question branching lets you control <br />
                                    which questions your participants <br />
                                    see based on their responses to <br />
                                    previous questions. The question <br />
                                    branch quantifier can be one of <br />
                                    two things: if any of these <br />
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