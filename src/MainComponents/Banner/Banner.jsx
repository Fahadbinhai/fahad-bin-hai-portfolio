import React from 'react';
import { ReactTyped } from 'react-typed';
import picture from '../../assets/logo/super pic.jpg';
import { Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden pb-36 lg:pb-[650px] shadow-md ">

            {/* Top Right Purple-Pink Ellipse */}
            <div
                className="absolute w-[500px] h-[500px] top-[-100px] right-[-100px] blur-[200px] z-0"
                style={{ backgroundColor: 'rgba(218, 77, 241, 0.4)', transform: 'rotate(130deg)' }}
            ></div>

            {/* Bottom Right Cyan-Blue Ellipse */}
            <div
                className="absolute w-[500px] h-[500px] bottom-[-100px] right-0 blur-[200px] z-0"
                style={{ backgroundColor: 'rgba(93, 223, 255, 0.4)' }}
            ></div>

            {/* Bottom Left Amber Glow */}
            <div
                className="absolute w-[500px] h-[300px] bottom-[-120px] left-[20px] blur-[200px] z-0"
                style={{
                    backgroundColor: 'rgba(251,191,36,0.6)',
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    transform: 'rotate(35deg)'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-20 max-w-[1650px] mx-auto px-6 lg:px-12 py-12">

                {/* Left: Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                    <Slide direction='right' duration={2500} triggerOnce>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Hello, I’m <br /> Fahad Bin Hai
                        </h1>

                        <ReactTyped
                            className="text-[#A53DFF] text-2xl md:text-3xl lg:text-4xl font-bold font-volkhov"
                            strings={[
                                'Web Developer',
                                'Front-End Developer',
                                'React Developer',
                                'MERN Stack Developer',
                                'Programmer'
                                
                            ]}
                            typeSpeed={80}
                            backSpeed={50}
                            backDelay={1500}
                            loop
                        />

                        <p className="text-gray-600 text-base mt-4 lg:text-lg">
                            I’m a passionate MERN Stack Developer skilled in React, JavaScript, Express and MongoDB. I love building modern, responsive websites with clean design and smooth user experience. Always eager to learn new technologies to craft better, user-friendly solutions for the future.
                        </p>

                        <div className='flex items-center gap-10'>
                            {/* Github Icon */}
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-gray-800 transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.304.76-1.604-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.215.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* Linkedin Icon */}
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-blue-700 hover:text-blue-600 hover:bg-blue-600 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <img className='w-8 h-8' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="" />
                            </a>


                            {/* Gmail Icon */}
                            <a
                                href="mailto:your.email@example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-red-600 hover:text-white hover:bg-red-500 transition-colors duration-300"
                                aria-label="Email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 2v.511l-8 5.003-8-5.003V6h16zm-16 12V8.489l7.56 4.725a1 1 0 001.08 0L20 8.489V18H4z" />
                                </svg>
                            </a>
                        </div>




                    </Slide>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start pt-8 lg:pt-20">
                    <Slide direction='left' duration={2500} triggerOnce>
                        <div className="w-[260px] h-[300px] sm:w-[340px] sm:h-[380px] md:w-[400px] md:h-[450px] lg:w-[536px] lg:h-[636px] border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                            <img className="w-full h-full object-cover rounded-xl" src={picture} alt="Fahad Bin Hai" />
                        </div>
                    </Slide>
                </div>

            </div>
        </section>
    );
};

export default Banner;
