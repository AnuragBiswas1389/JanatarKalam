import { useState } from 'react';
import React from 'react';
import "../tender/tender.css";
import BtnSlider from './BtnSlider';
import Slider from "../tender/tenderSlider";


const tender = () => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== 4) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === 4) {
            setSlideIndex(1)
        }

    }
    const prevSlider = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(4)
        }

    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div id='tender'>
           {Slider.map((obj, index) => {
                return (
                    <div key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" :"slide"}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='' />
                        <p>{obj.title}</p>
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlider} direction={"prev"} />
                        
                        
                    </div>)})}

                
               </div>)}
                            


export default tender