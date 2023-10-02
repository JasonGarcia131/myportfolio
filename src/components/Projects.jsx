import React from 'react';
import { ProjectData } from '../ProjectData';

const Projects = () => {

    const mappedProjects = ProjectData.map((item, index) => (
        <div key={index} className='w-3/4 h-[500px] flex flex-col justify-between my-8 mx-auto border border-black border-solid shadow-2xl shadow-black'>
            <div className='w-[100%] h-[50%] overflow-hidden'>
                <img src={item.imgUrl} alt='project thumnail' />
            </div>
            <div className='h-[45%] flex flex-col justify-around items-center overflow-scroll p-6 font-medium'>
                <h3 className='text-2xl'>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className='w-full h-[5%] object-bottom items-end px-2 flex flex-row justify-between font-bold'>
                <a className='underline' href={item.codeLink}>Code</a>
                {item.pageLink == "#" ? <p>Run Locally</p> : <a className='underline' href={item.pageLink}>Page</a>}
            </div>
        </div>
    ))

    return (
        <div className='h-[600px] overflow-scroll border border-solid border-black md:w-1/2 bg-white text-black'>
            <h2 className='text-center text-2xl font-bold my-6'>Projects</h2>
            {
                mappedProjects
            }
        </div>

    )
}

export default Projects;