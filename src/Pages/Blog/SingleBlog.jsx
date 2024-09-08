import React from 'react';

const SingleBlog = ({ blog }) => {
    const { image, url, title } = blog;
    return (
        <div className='flex border border-black rounded-md p-3 flex-col gap-6'>
            <img className='h-44 w-full object-cover rounded' src={image} />
            <h5 className="text-xl flex-grow font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <div>
                <a className="border btn rounded-lg text-sm font-bold bg-white text-black border-zinc-900 duration-200 hover:bg-black hover:text-white" href={url} target='_blank'>Read More</a>
            </div>
        </div>
    );
};


export default SingleBlog;