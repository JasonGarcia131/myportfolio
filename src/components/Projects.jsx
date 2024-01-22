import React from 'react';
import { ProjectData } from '../ProjectData';

const Projects = () => {

    const mappedProjects = ProjectData.map((item, index) => (
        <div key={index} className='max-w-lg h-[600px] bg-white text-black flex flex-col justify-between mb-16 mx-auto border border-white shadow-2xl shadow-slate-400'>
            <div className='w-[100%] h-[50%] border-b border-black'>
                <img className='h-[100%] w-[100%]' src={item.imgUrl} alt='project thumnail' />
            </div>
            <div className='h-[40%] flex flex-col items-center p-6'>
                <h3 className='text-2xl font-bold'>{item.name}</h3>
                <p className='text-lg overflow-y-scroll'>{item.description}</p>
            </div>
            <div className='w-full h-[5%] object-bottom items-end px-2 flex flex-row justify-between'>
                <a className='underline' href={item.codeLink}>Code</a>
                {item.pageLink == "#" ? <p>Run Locally</p> : <a className='underline' href={item.pageLink}>Page</a>}
            </div>
        </div>
    ))

    return (
        <div className='mt-20 lg:mt-40'>
            <h2 className='text-center text-6xl font-bold mb-6 lg:mb-20'>Projects</h2>
            <div className='w-full flex flex-wrap'>
             {
                mappedProjects
            }   
            </div>
            
        </div>

    )
}

export default Projects;