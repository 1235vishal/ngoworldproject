import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/BlogScrolling.css";

const blogs = [
  {
    img: "/HeropageImage/HeropageImage1.png",
    topic: "The Future of UI/UX Design",
    description: "Exploring the latest trends and innovations shaping the UI/UX industry.",
    date: "March 15, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage2.png",
    topic: "Mastering Full-Stack Development",
    description: "A guide to becoming a proficient full-stack developer in 2025.",
    date: "April 10, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage3.jpg",
    topic: "Digital Marketing Strategies",
    description: "How to stay ahead in the evolving world of digital marketing.",
    date: "May 5, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    topic: "The Rise of Esports",
    description: "Examining the growing impact of esports and gaming culture worldwide.",
    date: "June 20, 2025",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    topic: "Video Editing Best Practices",
    description: "Learn key techniques to enhance your video editing workflow.",
    date: "July 12, 2025",
  },
];

const BlogSlider = () => {
  return (
    <div className="slider-containerB">
      <h2 className="slider-heading">Latest Blog Posts</h2>

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
        {blogs.map((blog, index) => (
          <SwiperSlide key={index} className="card-itemB">
            <div className="card-content">
              <img src={blog.img} alt="Blog" className="card-imageB" />
              <div className="card-info">
                <h2 className="card-title">{blog.topic}</h2>
                <p className="card-date">📅 {blog.date}</p>
                <p className="card-description">{blog.description}</p>
                <button className="read-more-button">Read More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default BlogSlider;
