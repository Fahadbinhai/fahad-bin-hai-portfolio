import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TechStack = () => {
    const techStack = [
        {
            name: 'React',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        {
            name: 'Tailwind CSS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'Node.js',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
        },
        {
            name: 'Express.js',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
        },
        {
            name: 'Firebase',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg'
        },
        {
            name: 'React Router',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg'
        },
        {
            name: 'Framer Motion',
            img: 'https://i.ibb.co/bjbZ1XQ7/motion-2.png'
        },
        {
            name: 'JS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        },
        {
            name: 'HTML',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg'
        },
        {
            name: 'CSS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg'
        },
        {
            name: 'Mongodb',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'
        },
        {
            name: 'c++',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
        },
        {
            name: 'C',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
        },
        {
            name: 'next.js',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg'
        },
    ];

    return (
        <div className="bg-gray-200 -mt-50 pt-70 py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Technologies That I Use
            </h2>

            <Fade duration={2000}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center px-7">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-lg p-6 w-38 h-32 flex flex-col items-center justify-center text-center 
            transform transition-transform duration-300 hover:scale-125 hover:shadow-xl"
                        >
                            <img className="w-full h-full flex items-center justify-center mb-3" src={tech.img} alt={tech.name} />
                            {/* <p className="text-gray-700 font-semibold">{tech.name}</p> */}
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default TechStack;
