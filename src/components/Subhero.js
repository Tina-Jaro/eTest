import React from 'react'

import { FaLongArrowAltLeft } from 'react-icons/fa';

function Subhero() {
    return (
        <div className='flex bg-[#D54D3D] h-[410px] flex-col md:flex-row md:h-[190px] '>
            <div className='text-[16px] md:text-base w-[50%] pl-0 flex items-center mt-5 md:mt-0 ml-20 text-white'>
                <div className='pr-5 pl-0 cursor-pointer '>
                    <FaLongArrowAltLeft size={25} />
                </div>
                The best CBT solution that enables educators <br />
                and trainers to author, schedule, deliver, and <br />
                report on quizzes, tests and exams

            </div>
            <div className='border-b  ml-5 mr-5 md:ml-0 md:mr-0 mt-5 mb-5 md:border-l'></div>
            <div className='text-[16px] md:text-base pl-0 w-[50%] ml-20  flex items-center text-white'>
                <div className='pr-5 pl-0 cursor-pointer '>
                    <FaLongArrowAltLeft size={25} />
                </div>
                Automates all assessment phases: authoring, <br />
                scheduling, delivering, and reporting. It's easy <br />
                to use and do not require expensive hardware <br />
                to run, nor additional commercial software
            </div>
        </div>
    )
}

export default Subhero
