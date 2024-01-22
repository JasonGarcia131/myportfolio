import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    //Changes elements opacity to show current page. 
    //Development
    // const BASEURL = 'http://localhost:5173/myportfolio/'
    const BASEURL = "https://jasongarcia131.github.io/myportfolio/"
    const pathname = window.location.href
    const projects = pathname === `${BASEURL}` ? <Link className='font-bold text-xl underline' to="/">Projects</Link> : <p><Link to="/">Projects</Link></p>
    const resume = pathname === `${BASEURL}resume` ? <Link className='font-bold text-xl underline' to="/resume">Resume</Link> : <Link to="/resume">Resume</Link>

    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    return (
        <nav className="w-full my-10 flex justify-center ">
            {
                toggle
                    ? <div className='w-[70px] flex flex-col mr-2 justify-between fixed top-0 right-0 bg-black/50 z-40 md:hidden sidebar'>
                        <div className='self-end' onClick={() => handleToggle()}>X</div>
                        {projects}
                        {resume}
                        <a href='https://github.com/JasonGarcia131' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    : <AiOutlineMenu className='absolute top-4 right-4 md:hidden' onClick={() => handleToggle()} />
            }
            <div className='w-2/4 pl-[7px] max-md:hidden mr-2 flex justify-between'>
                {projects}
                {resume}
                <a href='https://github.com/JasonGarcia131' target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </nav>
    )
}

export default Nav;