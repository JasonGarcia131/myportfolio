import React from 'react';
import Projects from './Projects';

const Hero = () => {
    return (
        <div className='w-full py-2 flex flex-col justify-between md:flex-row'>
            <div className='text-center my-9 flex flex-col md:w-1/2 md:px-[10px] md:my-0 md:flex md:flex-col md:justify-center'>
                <h1 className='text-6xl font-roboto xl:text-8xl'>Jason Garcia</h1>
                <br/>
                <i className='text-xl font-poppins'>Let's collaborate and build.</i>
            </div>
            <Projects/>
        </div>
    )
}

export default Hero;

 // <div className='w-full py-2 flex flex-row justify-between '>
    //     <div className='w-1/3 border border-solid border-white'>
    //         <p>name</p>
    //         <p>qutoe</p>
    //         <a>Link 1</a>
    //         <a>Link 2</a>
    //     </div>
    //     <div className='w-2/4 flex flex-col justify-around content
    //     -center border border-solid border-white'>
    //         <div className='w-2/4 border border-white border-solid'>
    //             <div>
    //                 thumbnail
    //             </div>
    //             <div>
    //                 description
    //             </div>
    //             <div className='w-full px-2 border border-red border-solid flex flex-row justify-between'>
    //                 <a>Link 1</a>
    //                 <a>Link 2</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>