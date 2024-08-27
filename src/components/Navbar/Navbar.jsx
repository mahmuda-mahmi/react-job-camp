import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const li = (
        <>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/applied-jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        </>
    )
    return (
        <div className='mt-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {li}
                        </ul>
                    </div>
                    <a className="text-2xl font-black"><NavLink to='/'>{`<jobCamp/>`}</NavLink></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-5">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="border rounded-lg px-5 py-3 text-sm border-b-[6px] border-b-zinc-900 font-bold active:border-b border-zinc-900 duration-200">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;