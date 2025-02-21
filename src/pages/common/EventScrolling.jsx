import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/EventScrolling.css";

const events = [
  {
    img: "/HeropageImage/HeropageImage1.png",
    name: "Design Conference 2025",
    description: "An exclusive event for designers to explore the latest trends in UI/UX.",
    date: "March 15, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage2.png",
    name: "Developer Bootcamp",
    description: "Join top developers for hands-on coding sessions and networking.",
    date: "April 10, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage3.jpg",
    name: "Marketing Summit",
    description: "Learn from industry leaders about the future of digital marketing.",
    date: "May 5, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    name: "Gaming Expo",
    description: "Experience the latest in gaming technology and esports competitions.",
    date: "June 20, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    name: "Video Editing Masterclass",
    description: "Enhance your video editing skills with top professionals in the field.",
    date: "July 12, 2025",
  },
];

const CardSlider = () => {
  return (
    <div className="slider-containerE">
      {/* New Heading with Stylish Font */}
      <h2 className="slider-heading">In the Featured Events</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll feature
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
        {events.map((event, index) => (
          <SwiperSlide key={index} className="card-itemE">
            <div className="card-contentE">
              <img src={event.img} alt="Event" className="card-imageE" />
              <div className="card-info">
                <h2 className="card-title">{event.name}</h2>
                <p className="card-description">{event.description}</p>
                <p className="card-date">📅 {event.date}</p>
                <button className="view-more-button">View More</button>
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

export default CardSlider;
