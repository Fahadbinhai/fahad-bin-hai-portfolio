import React from 'react';
import Navbar from '../../MainComponents/Navbar/Navbar';
import Banner from '../../MainComponents/Banner/Banner';
import AboutMe from '../../MainComponents/AboutMe/AboutMe';
import TechStack from '../../MainComponents/TechStack/TechStack';
import ProjectsSection from '../../MainComponents/ProjectsSection/ProjectsSection';
import ContactMeCard from '../../MainComponents/ContactMeCard/ContactMeCard';
import Footer from '../../MainComponents/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />

            <div className="2xl:-mt-[30%] md:-mt-[45%] z-20 relative px-4">
                <AboutMe />
            </div>

            <TechStack />
            <ProjectsSection />

            {/* Contact Form overlapping above Footer */}
            <div className="relative z-30 -mb-[130px] mt-[200px]">
                <ContactMeCard />
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
