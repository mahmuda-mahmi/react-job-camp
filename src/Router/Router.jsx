import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Router = () => {
    return (
        <div>
            <div className='w-[85%] mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>

    );
};

export default Router;