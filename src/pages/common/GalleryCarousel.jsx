import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/GalleryCarousel.css"; // Custom styles

const GallerySlider = () => {
  const images = [
    "../../../public/imagegallery/1.JPG",
    "../../../public/imagegallery/2.JPG",
    "../../../public/imagegallery/3.JPG",
    "../../../public/imagegallery/4.JPG",
    "../../../public/imagegallery/5.JPG",
    "../../../public/imagegallery/6.JPG",
    "../../../public/imagegallery/7.JPG",
    "../../../public/imagegallery/8.JPG",
  ];

  const handleViewAll = () => {
    alert("Redirecting to full gallery...");
    // window.location.href = "/gallery"; // Uncomment for real navigation
  };

  return (
    <div className="gallery-container">
      <div className="overlay"></div>
      <h1 className="title">Check Our Gallery</h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Default: 3 images
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          480: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* View All Button */}
      <button className="btn" onClick={handleViewAll}>
        View All
      </button>
    </div>
  );
};

export default GallerySlider;
