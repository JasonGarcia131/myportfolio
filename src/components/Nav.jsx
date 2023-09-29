import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import '../index.css'

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
        console.log(toggle);
    }

    return (
        <nav className="w-full py-6 flex justify-end ">
            {
                toggle
                    ? <div className='flex flex-col mr-2 justify-between fixed top-0 bg-black z-40 md:hidden sidebar'>
                        <div className='self-end' onClick={()=>handleToggle()}>X</div>
                        <a>Projects</a>
                        <a>Resume</a>
                        <a>About</a>
                        <a>Github</a>
                        <a>Contact</a>
                    </div>
                    : <AiOutlineMenu className='absolute top-4 right-4 md:hidden' onClick={()=>handleToggle()} />
            }
            <div className='w-2/4 pl-[7px] max-md:hidden mr-2 flex justify-between'>
                <a>Projects</a>
                <a>Resume</a>
                <a>About</a>
                <a>Github</a>
                <a>Contact</a>
            </div>
        </nav>
    )
}

export default Nav;