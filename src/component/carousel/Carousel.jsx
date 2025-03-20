import React, { useRef, useEffect } from 'react';
import 'swiper/css';

const images = [
    "/images/carousel/iphone-15-pro.jpg",
    "/images/carousel/samsung-phones.jpeg",
    "/images/carousel/iphone-15-pro.jpg",
    "/images/carousel/Samsung-Galaxy-S25-Ultra.webp",
    "/images/carousel/iphone-15-pro.jpg"
];

const Carousel = () => {
    const swiperRef = useRef(null);
    let currentSlide = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current) {
                currentSlide = (currentSlide + 1) % images.length;
                swiperRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" overflow-hidden relative">


          

            <div
                ref={swiperRef}
                className="flex transition-transform duration-500"
            >
                {images.map((src, index) => (
                    <div key={index} className="min-w-full relative">
                        <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute right-4 bottom-4 left-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Buy Now</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Contact: 9503491515</button>
                        </div>

                       

                        <div className='absolute top-2 left-2 text-white bg-yellow-800 font-extrabold'>
                           
                            <p>
                                Flash 10% off on every product
                            </p>

                           
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
