import React from 'react';
import logo from '../../assets/logo/Logo.jpg';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const links = (
        <>
            <li><a className="hover:text-blue-800">About</a></li>
            <li><a className="hover:text-blue-800">Technology</a></li>
            <li><a className="hover:text-blue-800">Projects</a></li>
            <li><a className="hover:text-blue-800">Contact</a></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-5 lg:px-18">
            {/* Logo */}
            <div className="flex-1 flex items-center gap-2">
                <img className='w-[45px] h-[45px] rounded-full hidden lg:block' src={logo} alt="Logo" />
                <span className="text-xl lg:text-2xl font-bold">Fahad Bin Hai</span>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <li><a className="btn mt-2">Button</a></li>
                    </ul>
                </div>
            </div>

            {/* Desktop Menu + Button */}
            <div className="hidden lg:flex items-center gap-6">
                <ul className="menu menu-horizontal px-5 gap-12">
                    {links}
                </ul>
                <a className="btn bg-[#A53DFF] text-white"> <FaDownload /> Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
