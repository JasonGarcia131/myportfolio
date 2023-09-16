import React from 'react';

const Hero = () => {
  return (
    <div className='w-full py-2 flex flex-row justify-between'>
        <div className='w-1/3 border border-solid border-white'>
            <p>name</p>
            <p>qutoe</p>
            <a>Link 1</a>
            <a>Link 2</a>
        </div>
        <div className='w-2/4 flex flex-column justify-around content
        -center border border-solid border-white'>
            <div className='w-2/4 border border-white border-solid'>
                <div>
                    thumbnail
                </div>
                <div>
                    description
                </div>
                <div className='w-full px-2 border border-red border-solid flex flex-row justify-between'>
                    <a>Link 1</a>
                    <a>Link 2</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;