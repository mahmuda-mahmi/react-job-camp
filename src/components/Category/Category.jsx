import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const { img, category_name, availability } = category;
    return (
        <div className='p-6 bg-zinc-50 text-zinc-900 border-l-4 border border-zinc-100 border-l-zinc-700 flex flex-col gap-3 hover:border hover:border-zinc-700 hover:border-l-zinc-800 hover:border-l-4 duration-300'>
            <div className='flex-grow'>
                <img className='w-16 rounded p-2' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-lg font-bold'>{category_name}</h2>
                <p className='text-[#757575] mt-2'>{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {

};

export default Category;