import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../Styles/CustomCarousel.css"; // Import Carousel CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/Gallery.css';

const ImageGalleryHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="/event/bg1.png" alt="First slide" />
        <Carousel.Caption>
          <h3>Community Service</h3>
          <p>Our volunteers actively participate in community welfare programs to make a difference.</p>
              </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="/event/bg2.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Empowering Education</h3>
          <p>Providing underprivileged children with access to quality education and resources.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/event/bg3.png" alt="Third slide" />
        <Carousel.Caption>
          <h3>Health & Wellness</h3>
          <p>Promoting healthcare awareness and organizing medical camps for rural communities.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Images = () => {
  const [lightbox, setLightbox] = useState(null);

  const images = [
    { src: "../imagegallery/1.JPG", alt: "Event 1" },
    { src: "../imagegallery/2.JPG", alt: "Event 2" },
    { src: "../imagegallery/3.JPG", alt: "Event 3" },
    { src: "../imagegallery/4.JPG", alt: "Event 4" },
    { src: "../imagegallery/5.JPG", alt: "Event 5" },
    { src: "../imagegallery/6.JPG", alt: "Event 6" },
    { src: "../imagegallery/7.JPG", alt: "Event 7" },
    { src: "../imagegallery/8.JPG", alt: "Event 8" },
    { src: "../imagegallery/9.JPG", alt: "Event 9" },
    { src: "../imagegallery/1.JPG", alt: "Event 10" },
  ];

  return (
    <div>
      <h1 className="gallery-title">Acharya Brahaspati Trust - Image Gallery</h1>

      <div className="NGOImage">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setLightbox(image.src)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{image.alt}</div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content">
            <span className="close" onClick={() => setLightbox(null)}>
              &times;
            </span>
            <img src={lightbox} alt="Expanded View" />
          </div>
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  return (
      <div>
          <ImageGalleryHero />
          <Images />
          <Footer />
    </div>
  )
}

export default ImageGallery