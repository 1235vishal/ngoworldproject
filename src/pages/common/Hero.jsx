import React, { useEffect, useState } from "react";
import "../../Styles/Hero.css";

const Hero = () => {
    const slides = [
        {
            title: "Applauding Passion in Development Sector",
            text: "Applications for Junoon Awards 2025 are now open!",
            buttonText: "Discover more",
            imgSrc: "/HeropageImage/HeropageImage1.png",
        },
        {
            title: "Empowering Change-Makers",
            text: "Honoring individuals making a difference in society.",
            buttonText: "Join Now",
            imgSrc: "/HeropageImage/HeropageImage2.png",
        },
        {
            title: "Celebrating Social Impact",
            text: "Recognizing those creating a sustainable future.",
            buttonText: "Get Involved",
            imgSrc: "/HeropageImage/HeropageImage3.jpg",
        },
        {
            title: "Innovation for a Better World",
            text: "Encouraging new ideas for positive transformation.",
            buttonText: "Learn More",
            imgSrc: "/HeropageImage/HeropageImage4.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="unique-hero-container">
            {slides.map((slide, index) => (
                <div key={index} className={`unique-hero ${index === currentIndex ? "active" : ""}`}>
                    <div className="unique-hero-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.text}</p>
                        <button className="unique-discover-btn">{slide.buttonText}</button>
                    </div>
                    <div className="unique-hero-image">
                        <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
                    </div>
                </div>
            ))}

            <div className="unique-carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`unique-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
