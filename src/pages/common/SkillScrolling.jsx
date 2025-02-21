import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/SkillScrolling.css";

const classes = [
  {
    img: "/HeropageImage/HeropageImage1.png",
    className: "Classical Music Training",
    description: "Learn the essence of classical music from expert musicians.",
  },
  {
    img: "/HeropageImage/HeropageImage2.png",
    className: "Traditional Dance Workshop",
    description: "Master traditional dance forms with professional guidance.",
  },
  {
    img: "/HeropageImage/HeropageImage3.jpg",
    className: "Art & Culture Seminar",
    description: "Explore the rich history and traditions of cultural arts.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    className: "Painting & Creativity Hub",
    description: "Unleash your creativity with expert-led painting sessions.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    className: "Yoga & Meditation",
    description: "Discover inner peace and mindfulness through guided yoga.",
  },
];

const NgoSkill = () => {
  return (
    <div className="slider-containerS">
      {/* Heading */}
      <h2 className="slider-heading">Explore Skill Enhancement Sessions</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="card-wrapper"
      >
        {classes.map((item, index) => (
          <SwiperSlide key={index} className="card-itemS">
            <div className="card-contentS">
              {/* Image First */}
              <img src={item.img} alt="Class" className="card-imageS" />
              
              <div className="card-info">
                {/* Class Name */}
                <h2 className="card-title">{item.className}</h2>
                
                {/* Short Description */}
                <p className="card-description">{item.description}</p>
                
                {/* Updated Button Text */}
                <button className="view-more-button">Join Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default NgoSkill;
