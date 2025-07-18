import React from 'react';
import { ReactTyped } from 'react-typed';
import picture from '../../assets/logo/super pic.jpg'
import { Fade, Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <section className="relative w-full h-[160vh] bg-white overflow-hidden border mb-20 ">

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

            {/* Actual Content */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:gap-15 h-[100vh] max-w-[1650px] mx-auto px-6 lg:px-12">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                    <Slide direction='right' duration={2500}>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Hello, I’m <br /> Fahad Bin Hai
                        </h1>

                        <ReactTyped
                            className="text-[#A53DFF] text-2xl md:text-3xl lg:text-4xl font-bold font-volkhov"
                            strings={[
                                'Web Developer',
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
                    </Slide>
                </div>


                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                    {/* Replace with actual <img src="" /> later */}
                    <Slide direction='left' duration={2500}>
                        <div className="w-[400px] h-[450px] lg:w-[536px] lg:h-[636px] border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                            <img className="w-full h-full object-cover rounded-xl" src={picture} alt="" />
                        </div>
                    </Slide>
                </div>


            </div>
        </section>
    );
};

export default Banner;
