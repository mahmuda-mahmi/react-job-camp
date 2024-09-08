import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className='w-[85%] mx-auto mb-10'>
            <div className='w-7/12 mx-auto text-center my-20 '>
                <h2 className='text-3xl font-extrabold text-[#1A1919] leading-snug'>Blogs</h2>
                <p className='text-[#757575] my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
                {
                    blogs?.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>

        </div>
    );
};

Blog.propTypes = {

};

export default Blog;