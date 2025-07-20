import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoLink } from 'react-icons/io5';
import Project3Slider from './Project3Slider/Project3Slider';
import { Slide } from 'react-awesome-reveal';

const Project3 = () => {
    return (
        <div className="card shadow-2xl shadow-black flex flex-col lg:flex-row 
            w-full md:max-w-[1200px] lg:max-w-[1500px] mx-auto mt-14 border-4 rounded-xl">

            {/* Left side - slider box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8">
                <Slide duration={2000} triggerOnce>
                    <div className="w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded overflow-hidden shadow-lg border-black">

                        <Project3Slider />

                    </div>
                </Slide>
            </div>

            {/* Right side - details */}
            <div className="flex flex-col w-full lg:w-1/2 text-black p-4 md:p-6 lg:p-8 xl:p-10">

                {/* Title & Description */}
                <Slide direction="up" duration={1000} triggerOnce>
                    <div className="text-center mb-6">
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">HomeVista</h2>
                        <p className="font-medium text-base md:text-lg text-black">
                            HomeVista is a real estate platform where agents add properties and customers can purchase them upon successful payment. Admins oversee property approvals and identify suspicious agents when required. Role-specific access and routing ensure a secure and organized experience for all users.
                        </p>
                    </div>
                </Slide>

                {/* Feature List */}
                <Slide direction="up" delay={600} duration={1000} triggerOnce>
                    <ul className="space-y-2 text-black mb-6 text-left">
                        <li className="flex items-start"><GoDotFill className="mt-1" /> Only Verified Agents can add properties</li>
                        <li className="flex items-start"><GoDotFill className="mt-1" /> A payment method has been integrated</li>
                        <li className="flex items-start"><GoDotFill className="mt-1" /> Property added after Admins verification</li>
                        <li className="flex items-start"><GoDotFill className="mt-1" /> Admin can make Admin or Agents</li>
                        <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Front-end :</span> React, React Router, DaisyUi, Firebase etc</li>
                        <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Back-end :</span> Node.js, Express.js, MongoDB</li>
                    </ul>
                </Slide>

                {/* Buttons */}
                <Slide direction="up" delay={700} duration={1000} triggerOnce>
                    <div className="flex flex-wrap gap-4 text-left">
                        <Link to='https://hobby-hub-ca344.web.app/' className="btn btn-outline border-2 border-[#A53DFF] hover:bg-[#A53DFF] hover:text-white text-[#A53DFF] min-w-[140px] h-12">
                            <FaEye /> Live Preview
                        </Link>
                        <Link to='https://github.com/Fahadbinhai/Hobby-Hub-client' className="btn btn-outline border-2 border-[#A53DFF] hover:bg-[#A53DFF] hover:text-white min-w-[140px] text-[#A53DFF] h-12">
                            <IoLink /> Client Side
                        </Link>
                        <Link to='https://github.com/Fahadbinhai/hobbyHub-server' className="btn btn-outline border-2 border-[#A53DFF] min-w-[140px] hover:bg-[#A53DFF] hover:text-white text-[#A53DFF] h-12">
                            <IoLink /> Server Side
                        </Link>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Project3;
