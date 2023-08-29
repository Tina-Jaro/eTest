import React from 'react';

function WhoWeAre() {
    return (
        <>
            <div className='flex flex-col md:flex-row w-[100%] justify-center p-10 gap-[60px] h-auto overflow-hidden'>
                <div className='w-[100%] md:w-[40%] h-[100%] md:mt-9'>
                    <h4 className='text-[20px]  mb-5 font-bold'>WHO ARE WE ? </h4>
                    <p className='leading-8 text-[16px]'>eTest is part of our Learning Management System (LMS) suites
                        that offers simple registration, easy test creation, signing- in,
                        synchronized processing, secured encoding and decoding of
                        information and more. <br /> <br />

                        eTest Computer Based Test software enables educators and
                        trainers to author, schedule, deliver, and  report on tests and
                        exams. It is a professional computerized testing application. In
                        short, it makes testing easier for students and administrators. <br />
                        <br />

                        eTest has been made to assist simple and complex reporting
                        systems. Reports can be produced for just about any
                        information in the application. Reports can also be produced to
                        be used as an exam attendance sheet.
                        The general advantages of eTest over traditional Pen-and-Paper
                        Testing (PPT) includes: time efficiency, administration and
                        scoring efficiency, costs efficiency, improved test security via
                        encryption, improved consistency and reliability, faster decision-
                        making as the result of immediate scoring and reporting
                    </p>
                </div>
                <div className='mt-10 md:mt-0 w-[100%] items-center flex md:w-[40%] rounded-sm bg-[#3d3b3b]'>
                    <iframe
                        className='h-[100%] w-[100%]'
                        src="https://www.youtube.com/embed/0t80TL9HJkc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>

                </div>

            </div>
        </>
    )
}

export default WhoWeAre