import React from 'react';
import image from '../../assets/logo/cool.jpg';
import { Fade } from 'react-awesome-reveal';
import { GoProjectRoadmap } from 'react-icons/go';
import { FaDownload } from 'react-icons/fa';
import { RiProjectorFill } from 'react-icons/ri';
import resume from '../../../public/Resume_FahadBinHai.pdf'

const AboutMe = () => {


    return (
        <section id='about' className="max-w-[95%] md:max-w-5xl xl:max-w-6xl 2xl:max-w-[1400px] mx-auto bg-white shadow-2xl border border-gray-100 p-6 md:p-10 lg:p-16 xl:p-20 2xl:p-24 rounded-2xl">
            <Fade duration={2000}>
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {/* Image Section */}
                    <figure className="
                        w-full
                        md:w-[280px]
                        lg:w-[350px]
                        xl:w-[400px]
                        2xl:w-[460px]
                        shrink-0
                        relative
                    ">
                        <img
                            className="w-full h-auto lg:h-[calc(100%+80px)] object-cover rounded-lg"
                            src={image}
                            alt="Fahad Bin Hai"
                        />
                    </figure>

                    {/* Text and Buttons Section */}
                    <div className="flex flex-col flex-1 text-center lg:text-left">
                        <h3 className="
                            text-lg
                            md:text-3xl
                            lg:text-3xl
                            xl:text-[36px]
                            font-semibold
                            mb-4
                        ">
                            I Build Scalable Web Solutions with the MERN Stack
                        </h3>
                        <p className="
                            text-sm
                            md:text-base
                            lg:text-md
                            xl:text-md
                            2xl:text-lg
                            font-normal
                            leading-relaxed
                            mb-8
                        ">
                            Hi! I’m Fahad Bin Hai — a university student and an aspiring MERN Stack Developer. I enjoy working on both frontend and backend using React, Node.js, Express.js, MongoDB and tools like React Router, HTML and CSS to build modern, responsive websites. <br />
                            Coding isn’t just a skill for me — it’s a real passion to craft user-friendly solutions and keep exploring new technologies. Beyond coding, I love outdoor sports which keeps me energetic and helps me think creatively. For me, success means turning ideas into practical, meaningful solutions that solve real problems and improve people’s lives.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href='#projects' className="btn btn-primary px-8 py-3 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition">
                                <RiProjectorFill /> My Projects
                            </a>
                            <a href={resume} download='Resume_FahadBinHai' className="btn btn-outline px-8 py-3 rounded-md border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                                <FaDownload />  Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default AboutMe;
