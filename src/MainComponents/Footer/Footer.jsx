import React from 'react';
import logo from '../../assets/logo/Logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-[#2B384C] text-white pt-[200px] pb-[50px]">
            <div className="max-w-[1300px] lg:px-24 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                
                {/* Logo and Name */}
                <div className="flex flex-row items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={logo} alt="Logo" />
                    <p className="font-semibold text-lg">My Portfolio</p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-row gap-6 md:items-center">
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Technology</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                {/* Copyright */}
                <aside className="text-sm md:text-right">
                    <p>Copyright © {new Date().getFullYear()}</p>
                    <p>All rights reserved</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
