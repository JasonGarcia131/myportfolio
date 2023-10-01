import React from 'react';
import Projects from './Projects';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
const Hero = () => {
    return (
        <div className='w-full py-2 flex flex-col justify-between md:flex-row'>
            <div className='text-center my-9 flex flex-col md:w-1/2 md:px-[10px] md:my-0 md:flex md:flex-col md:justify-center'>
                <h1 className='text-6xl font-roboto xl:text-8xl'>Jason Garcia</h1>
                <br />
                <p className='text-xl font-poppins italic'>"Let's collaborate and build."</p>
                <div className='flex justify-center items-end mt-4'>
                    <FaPhoneAlt/> <span className='mx-2'>323-316-8978</span>
                    <a className="mr-2 ml-2" href="mailto:jaygarcia0530@gmail.com"><FaEnvelope /></a><a className="margin mobile" href="mailto:jaygarcia0530@gmail.com">jaygarcia0530@gmail.com</a>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Hero;