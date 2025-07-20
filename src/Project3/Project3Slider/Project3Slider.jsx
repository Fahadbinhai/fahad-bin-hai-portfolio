import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/project3/img1.png'
import img2 from '../../assets/project3/img2.png'
import img3 from '../../assets/project3/img3.png'
import img4 from '../../assets/project3/img4.png'
import img5 from '../../assets/project3/img5.png'
import img6 from '../../assets/project3/img6.png'
import img7 from '../../assets/project3/img7.png'
import img8 from '../../assets/project3/img8.png'
import img9 from '../../assets/project3/img9.png'
import img10 from '../../assets/project3/img10.png'

const Project3Slider = () => {
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
                <img src={img1} alt="Screenshot 1" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img2} alt="Screenshot 2" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img3} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img4} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img5} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img6} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img7} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img8} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img9} alt="Screenshot 3" className="object-cover w-full h-full" />
            </div>
            <div className='h-[500px]'>
                <img src={img10} alt="Screenshot 3" className="object-fit w-full h-full" />
            </div>
        </Carousel>
    );
};

export default Project3Slider;