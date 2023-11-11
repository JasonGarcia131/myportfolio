import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    //Changes elements opacity to show current page. 
    const BASEURL = "https://jasongarcia131.github.io/myportfolio/"
    const pathname = window.location.href
    const projects = pathname === `${BASEURL}` ? <Link className='text-gray-500' to="/">Projects</Link> : <p><Link to="/">Projects</Link></p>
    const about = pathname === `${BASEURL}about` ? <Link className='text-gray-500' to="/about">About</Link> : <Link to="/about">About</Link>
    const resume = pathname === `${BASEURL}resume` ? <Link className='text-gray-500' to="/resume">Resume</Link> : <Link to="/resume">Resume</Link>

    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    return (
        <nav className="w-full py-6 flex justify-end ">
            {
                toggle
                    ? <div className='w-[70px] flex flex-col mr-2 justify-between fixed top-0 bg-black/50 z-40 md:hidden sidebar'>
                        <div className='self-end' onClick={() => handleToggle()}>X</div>
                        {projects}
                        {resume}
                        {about}
                        <a href='https://github.com/JasonGarcia131'>Github</a>
                    </div>
                    : <AiOutlineMenu className='absolute top-4 right-4 md:hidden' onClick={() => handleToggle()} />
            }
            <div className='w-2/4 pl-[7px] max-md:hidden mr-2 flex justify-between'>
                {projects}
                {resume}
                {about}
                <a href='https://github.com/JasonGarcia131'>Github</a>
            </div>
        </nav>
    )
}

export default Nav;