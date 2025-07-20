import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/project2/1.png'
import img2 from '../../../assets/project2/2.png'
import img3 from '../../../assets/project2/3.png'
import img4 from '../../../assets/project2/4.png'
import img5 from '../../../assets/project2/5.png'
import img6 from '../../../assets/project2/6.png'
import img7 from '../../../assets/project2/7.png'
import img8 from '../../../assets/project2/8.png'


const Project2Slider = () => {
    return (
        <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            showIndicators={false}
        >
            <div className='h-[500px]'>
                <img src={img1} alt="Screenshot 1" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img2} alt="Screenshot 2" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img3} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img4} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img5} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img6} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img7} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img8} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
        </Carousel>
    );
};

export default Project2Slider;