import React from 'react';
import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div className='flex flex-col border shadow-md rounded p-7 gap-y-2'>
            <div className='my-3'>
                <img className='h-6 object-contain' src={logo} alt="" />
            </div>
            <h2 className='text-xl font-black'>{job_title}</h2>
            <p className='font-semibold'>{company_name}</p>
            <div className='mt-3'>
                <button className='bg-white px-5 py-1 border border-black hover:bg-black hover:text-white duration-300'>{remote_or_onsite}</button>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex items-center gap-2'><CiLocationOn />{location}</p>
                <p className='flex items-center gap-2'><CiDollar />{salary}</p>
            </div>
            <div>
                <NavLink to={`/react-job-camp/job/${id}`}><button className='flex text-white bg-black px-5 py-2 border hover:bg-white hover:text-black hover:border-black duration-300'>View Details</button></NavLink>
            </div>
            
        </div>
    );
};

Job.propTypes = {

};

export default Job;