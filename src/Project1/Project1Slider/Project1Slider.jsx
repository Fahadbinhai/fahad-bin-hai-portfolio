import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Project1/pic1.png'
import img2 from '../../assets/Project1/pic2.png'
import img3 from '../../assets/Project1/pic3.png'
import img4 from '../../assets/Project1/pic4.png'
import img5 from '../../assets/Project1/pic5.png'

const Project1Slider = () => {
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
        </Carousel>
    );
};

export default Project1Slider;
