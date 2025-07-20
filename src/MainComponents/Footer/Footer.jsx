import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#2B384C] text-white rounded p-10 h-[350px]">
            <nav className="grid grid-flow-col gap-4 mt-[170px]">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
        
            {/* <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside> */}
        </footer>
    );
};

export default Footer;