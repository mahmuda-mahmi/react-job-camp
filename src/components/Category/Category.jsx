import React from 'react';
import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {img, category_name, availability} = category;
    return (
        <div className='p-5 bg-[#e2e5ff] rounded'>
            <img className='w-16 bg-[#a8b4fa6e] rounded p-2' src={img} alt="" />
            <div>
            <h2>{category_name}</h2>
            <p>{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    
};

export default Category;