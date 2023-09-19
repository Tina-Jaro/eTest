import React from 'react'

import { FaLongArrowAltLeft } from 'react-icons/fa';

function Subhero() {
    return (
        <div className='flex bg-[#D54D3D] w-[100%] h-[350px] flex-col md:flex-row md:h-[190px] '>
            <div className='text-[16px] md:text-base w-fit md:w-[50%] p-3 flex items-center mt-5 md:mt-0 ml-10 text-white'>
                <div className='pr-5 pl-0 cursor-pointer '>
                    <FaLongArrowAltLeft size={25} />
                </div>
                The best CBT solution that enables educators
                and trainers to author, schedule, deliver, and
                report on quizzes, tests and exams

            </div>
            <div className='border-b  ml-5 mr-5 md:ml-0 md:mr-0 mt-5 mb-5 md:border-l'></div>
            <div className='text-[16px] md:text-base p-3  w-fit md:w-[50%] ml-10  flex items-center text-white'>
                <div className='pr-5 pl-0 cursor-pointer '>
                    <FaLongArrowAltLeft size={25} />
                </div>
                Automates all assessment phases: authoring,
                scheduling, delivering, and reporting. It's easy
                to use and do not require expensive hardware
                to run, nor additional commercial software
            </div>
        </div>
    )
}

export default Subhero
