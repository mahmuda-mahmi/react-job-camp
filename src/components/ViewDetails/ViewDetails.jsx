import React from 'react';
import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar, CiMail } from "react-icons/ci";
import { PiSubtitles } from "react-icons/pi";
import { RiPhoneLine } from "react-icons/ri";
import { useLoaderData, useParams } from 'react-router-dom';
import { savedJobs } from '../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {

    const jobs = useLoaderData();
    const id = useParams();
    const intId = parseInt(id.id);
    const job = jobs?.find(job => job.id === intId);
    const { job_title, salary, job_responsibility, job_description, educational_requirements, experiences, contact_information } = job;

    const handleApply = () => {
        const storedJobs = localStorage.getItem("job-application");
        const storedJobsParse = JSON.parse(storedJobs);
        const exists = storedJobsParse?.find(jobId => jobId === intId)
        if(!exists){
            toast.success('Applied Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            savedJobs(intId);
        }
        else if(exists){
            toast.error('Already Applied!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-20 bg-gray-50'>
                <h1 className='text-2xl font-bold text-black text-center'>Job Details</h1>
            </div>
            <div className='grid grid-cols-[65%_35%] p-10 mx-auto'>
                <div className='p-8 ml-8 flex flex-col justify-center'>
                    <h1><span className='font-bold'>Job Description: <br /> </span><span className='text-gray-600'>{job_description}</span></h1>
                    <br />
                    <h1><span className='font-bold'>Job Responsibilities: <br /> </span><span className='text-gray-600'>{job_responsibility}</span></h1>
                    <br />
                    <h1><span className='font-bold'>Educational Qualification:</span> <br /><span className='text-gray-600'>{educational_requirements}</span></h1>
                    <br />
                    <h1><span className='font-bold'>Experiences: <br /> </span><span className='text-gray-600'>{experiences}</span></h1>
                </div>
                <div className='p-5 gap-y-4 flex flex-col'>
                    <div className='grid gap-y-4 mt-5'>
                        <h1 className='text-xl'>Job Details</h1>
                        <hr />
                        <span className='flex items-center gap-2'><CiDollar /><span className='font-bold'>Salary: </span>{salary}</span>
                        <span className='flex items-center gap-2'><PiSubtitles /><span className='font-bold'>Title: </span>{job_title}</span>
                    </div>
                    <div className='grid gap-y-4 mt-5'>
                        <h1 className='text-xl'>Contact Details</h1>
                        <hr />
                        <span className='flex items-center gap-2'><RiPhoneLine /><span className='font-bold'>Phone:</span> {contact_information.phone}</span>
                        <span className='flex items-center gap-2'><CiMail /> <span className='font-bold'>Mail: </span>{contact_information.email}</span>
                        <span className='flex items-center gap-2'><CiLocationOn /> <span className='font-bold'>Address: </span>{contact_information.address}</span>
                    </div>
                    <button className="border rounded-lg px-5 py-3 text-sm border-b-[6px] border-b-zinc-900 font-bold active:border-b border-zinc-900 duration-200" onClick={handleApply}>Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

ViewDetails.propTypes = {

};

export default ViewDetails;