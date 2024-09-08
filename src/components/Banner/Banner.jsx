import React from 'react';
import PropTypes from 'prop-types';

const banner = () => {
    return (
        <div className='grid grid-cols-[70%_30%] gap-4 gap-y-4 items-center w-[85%] mx-auto'>
            <div className='text-left'>
                <h1 className='font-extrabold text-6xl text-[#1A1919] leading-tight'>One Step
                    <br />
                    Closer To Your
                    <br />
                    <span className='bg-gradient-to-tl from-cyan-900 to-zinc-900 text-transparent bg-clip-text'>Dream Job</span>
                </h1>
                <p className='w-3/4 my-6 text-zinc-950'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn rounded-none bg-white border border-zinc-950 font-medium tracking-widest text-zinc-950 hover:bg-white hover:border-zinc-950 shadow-[5px_5px_0px_1px_#000] active:shadow-[0px_0px_0px_0px_#000]'>Get Started</button>
            </div>
            <div className='mt-12'>
                <img className='' src="https://i.ibb.co/WGBvkzK/Male-headshot-we-DSC-1955.png" />
            </div>
        </div>
    );
};

banner.propTypes = {

};

export default banner;