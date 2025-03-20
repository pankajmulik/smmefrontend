import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BrandCarousel = () => {
    const brandImages = [
        { id: 1, name: 'Apple', src: '/images/brands/iphone-logo-17.png' },
        { id: 2, name: 'Samsung', src: '/images/brands/sam-logo.png' },
        { id: 3, name: 'JBL', src: '/images/brands/jbl-logo.jpg' },
        { id: 4, name: 'Boat', src: '/images/brands/boat-logo.jpg' },
        { id: 5, name: 'Xiaomi', src: '/images/brands/mi-logo.png' },
        { id: 6, name: 'Realme', src: '/images/brands/realmelogo.jpg' },
        // Add more brands as needed
    ];

    return (
        <div className="h-[60vh] overflow-hidden relative">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false,
                }}
                breakpoints={{

                    480: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                loop
                centeredSlides={true}
                className="h-full justify-center mx-auto"
            >
                {brandImages.map((brand, index) => (
                    <SwiperSlide key={index} className="flex flex-col mx-[2.5%] text-center  ">
                        <img src={brand.src} alt={brand.name} className=" object-fill w-48 h-48  " />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandCarousel;
