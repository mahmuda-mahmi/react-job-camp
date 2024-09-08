import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Job from '../../components/Job/Job';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(() => {
        const storedJobs = localStorage.getItem("job-application");
        const filterJobs = jobs.filter(job => storedJobs.includes(job.id));
        setAppliedJobs(filterJobs);
        setDisplayJobs(filterJobs);
    }, [])
    const handleFilter = filter => {
        if (filter === "All") {
            setDisplayJobs(appliedJobs);
        }
        else if(filter === "Remote"){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === "Onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
        
    }
    return (
        <div className='w-[85%] mx-auto mb-10'>
            <div className='w-7/12 mx-auto text-center my-20 '>
                <h2 className='text-3xl font-extrabold text-[#1A1919] leading-snug'>Applied Jobs</h2>
                <p className='text-[#757575] my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-5'>
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleFilter("All")}><a>All</a></li>
                        <li onClick={() => handleFilter("Remote")}><a>Remote</a></li>
                        <li onClick={() => handleFilter("Onsite")}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                {
                    displayJobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

AppliedJobs.propTypes = {

};

export default AppliedJobs;