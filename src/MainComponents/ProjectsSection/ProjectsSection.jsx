import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Project1 from '../../Project1/Project1';
import Project2 from '../../Components/Project2/Project2';


const ProjectsSection = () => {
    return (
        <div id='projects' className='text-white text-center px-4 mt-14 sm:px-6 lg:px-8 xl:px-12 md:py-16 lg:py-20 max-w-[1400px] mx-auto'>

            <h3 className='text-3xl md:text-4xl font-bold pb-8 md:pb-12 text-black'>My Recent Project</h3>

            {/* TODO: Projects needed to be added */}

            {/* project 1 */}

            <Zoom className=''>
                <Project2></Project2>
            </Zoom>



            <Zoom className='mt-30'>
                <Project1 />
            </Zoom>



            {/* <Zoom className='mt-16'>
                <Project3></Project3>
            </Zoom> */}
        </div>
    );
};

export default ProjectsSection;
