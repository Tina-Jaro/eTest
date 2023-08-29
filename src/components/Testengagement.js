import React from 'react';
import exam from '../assets/images/exam.png';

function Testengagement() {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row bg-[#FAF8F8] p-10 md:p-0'>
        <div className='w-[90%] mt-10 md:mt-0 flex justify-center md:w-[50%] md:p-[70px]'>
            <img src={exam} className='h-[100%] md:pl-[80px]' alt=''/>
        </div>

        <div className='w-[100%] md:w-[50%] md:p-0 '>
            <h3 className='mt-10 md:mt-[150px] text-[20px] font-bold'>MAKE THE MOST OF TEST ENGAGEMENTS</h3>

            <p className='mt-5 md:mt-[60px]'>eTest also comes with an author engine which enables an author to 
            perform several activities including creating, editing, or deleting a 
            test, creating candidate profiles or questions. <br/> <br />eTest is a fit for all 
             solution for tests a large number of examines at their centers without 
              internet connection!</p>

            <p className='mt-5 md:mt-[60px] text-black font-bold cursor-pointer hover:text-[#CB2310]'>Request Demo</p>
        </div>
      
    </div>
  )
}

export default Testengagement
