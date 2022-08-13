import React, { useEffect, useState }  from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const slideImagesData = [
    { id: 1, image: "./images/slide-img/47LfDUyvRo.jpg" },
    { id: 2, image: "./images/slide-img/dSczTXjryP.jpg" },
    { id: 3, image: "./images/slide-img/KmZd09NFjQ.jpg" },
    { id: 4, image: "./images/slide-img/Nge89D8cHu.jpg" },
    { id: 5, image: "./images/slide-img/NxiC4VI8kG.jpg" },
    { id: 6, image: "./images/slide-img/QCnXFGoRmY.jpg" },
    { id: 7, image: "./images/slide-img/zPNODOYPLi.jpg" },
];


const Slider = () => {
    let len = slideImagesData.length;
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? len - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent(current === len - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === len - 1 ? 0 : current + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, [current, len]);
  return (
    <div className='slider'>
        <FaArrowLeft className="arrow prev" onClick={prevSlide}/>
        <FaArrowRight className="arrow next" onClick={nextSlide}/>
        {slideImagesData.map((image, index) => (
            <div className={index === current ? "slide active" : "slide"} key={index}>
                <img src={image.image} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Slider