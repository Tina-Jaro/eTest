import React from 'react';
import exam from '../assets/images/exam.png';

function Productivity() {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row bg-[#FAF8F8] p-10 md:p-0'>
      <div className='w-[90%] mt-10 md:mt-0 flex justify-center md:w-[50%] md:p-[70px]'>
        <img src={exam} className=' h-[100%] md:pl-[80px]'  alt='' />
      </div>

      <div className='w-[100%] md:w-[50%] '>
        <h3 className=' mt-5 md:mt-[150px] text-[20px] font-bold'>GET MORE PRODUCTIVITY WITH THE  AUTHOR ENGINE</h3>

        <p className='mt-[30px] leading-7 text-[16px]'>
          The Author Engine enables an author to perform several activities 
          including Creating, editing, and/or deleting a test/Groups and Candidate 
          profiles, Questions. <br /> <br/>
          eTest provides the platform to administer exams to the candidates. 
          Typically, the examiner imports the previously saved test module(s) and 
          re initializes the exam engine. The exam engine is packed with several
          features.
        </p>
      </div>

    </div>
  )
}

export default Productivity