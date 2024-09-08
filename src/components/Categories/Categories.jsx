import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories]  = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    },[]);

    return (
        <div className='w-[85%] mx-auto'>
            <div className='w-7/12 mx-auto text-center my-20'>
                <h2 className='text-3xl font-extrabold text-[#1A1919] leading-snug'>Job Category List</h2>
                <p className='text-[#757575] my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>

    );
};

Categories.propTypes = {

};

export default Categories;