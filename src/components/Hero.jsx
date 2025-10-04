import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        '/assets/bgImg.jpg',
        '/assets/bgimg1.jpg',
        '/assets/bgimg2.jpg',
        '/assets/bgimg3.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div
            className="relative h-screen bg-cover bg-center transition-opacity duration-1000 ease-in-out" 
            // 👆 added padding-top to push hero content below navbar
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
