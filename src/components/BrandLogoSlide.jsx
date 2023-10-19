import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandLogoSlide = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/gjmN0433/levi-logo-large.png" alt="" />
            </div>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/T2JtsMX0/HM-e1677491459432.jpg" alt="" />
            </div>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/MH9bpw68/download-1.png" alt="" />
            </div>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/Nj38MpcL/download.png" alt="" />
            </div>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/7L1zL49Q/Feation-1-removebg-preview.png" alt="" />
            </div>
            <div className='p-2'>
                <img className='w-full h-[70px]' src="https://i.postimg.cc/bJNZNtss/download-2.png" alt="" />
            </div>

        </Slider>
    );
};

export default BrandLogoSlide;