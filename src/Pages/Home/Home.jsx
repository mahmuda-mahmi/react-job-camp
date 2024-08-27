import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;