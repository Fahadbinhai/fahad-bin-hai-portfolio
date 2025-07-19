import React from 'react';
import Navbar from '../../MainComponents/Navbar/Navbar';
import Banner from '../../MainComponents/Banner/Banner';
import AboutMe from '../../MainComponents/AboutMe/AboutMe';
import TechStack from '../../MainComponents/TechStack/TechStack';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="2xl:-mt-[30%] md:-mt-[45%] z-20 relative px-4">
                <AboutMe />
            </div>
            <TechStack></TechStack>
        </div>
    );
};

export default HomePage;
