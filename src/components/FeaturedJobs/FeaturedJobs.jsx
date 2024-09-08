import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    const [count, setCount] = useState(4);
    return (
        <div className='w-[85%] mx-auto'>
            <div className='w-7/12 mx-auto text-center my-20 '>
                <h2 className='text-3xl font-extrabold text-[#1A1919] leading-snug'>Featured Jobs</h2>
                <p className='text-[#757575] my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                {
                    jobs.slice(0,count).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='my-10 flex justify-center'>
                <button className={`border rounded-lg px-5 py-3 text-sm border-b-[6px] border-b-zinc-900 font-bold active:border-b border-zinc-900 duration-200 ${count === jobs.length ? 'hidden' : ' '}`} onClick={() => setCount(jobs.length)}>Show More</button>
            </div>
        </div>

    );
};

FeaturedJobs.propTypes = {

};

export default FeaturedJobs;