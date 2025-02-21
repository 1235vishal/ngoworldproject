import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import GallerySlider from "../common/GalleryCarousel"; // Adjust the path as needed
import "./Styles/ExploreHero.css"; // Ensure this file exists for styling
import './Styles/NGOClasses.css';
// Carousel component
const ExploreHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="../../../public/event/bg1.png" alt="Music Class" className="carousel-image" />
        <Carousel.Caption>
          <h3>Immerse in the World of Music</h3>
          <p>
            Join our expert-led **classical and contemporary music sessions** to enhance your skills and appreciation for music.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img src="../../../public/event/bg2.png" alt="Dance Class" className="carousel-image" />
        <Carousel.Caption>
          <h3>Express Yourself Through Dance</h3>
          <p>
            Experience the grace of **classical and modern dance classes**, guided by professional artists.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="../../../public/event/bg3.png" alt="Art and Culture" className="carousel-image" />
        <Carousel.Caption>
          <h3>Art & Culture: A Journey of Creativity</h3>
          <p>
            Explore **traditional and contemporary art forms**, embracing the richness of different cultures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="../../../public/event/bg1.png" alt="Podcast and Sessions" className="carousel-image" />
        <Carousel.Caption>
          <h3>Inspiring Podcasts & Discussions</h3>
          <p>
            Tune into insightful **podcasts and cultural discussions**, featuring thought leaders and artists.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="../../../public/event/bg2.png" alt="Upcoming Sessions" className="carousel-image" />
        <Carousel.Caption>
          <h3>Exciting Upcoming Sessions</h3>
          <p>
            Stay updated on **new events, workshops, and interactive sessions** happening soon.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ngoClasses = [
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Classical Music Sessions",
    description: "Join our expert-led classical music sessions to master Indian and Western classical styles.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Classical Dance Sessions",
    description: "Immerse yourself in the beauty of Bharatanatyam, Kathak, and other classical dance forms.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Art and Culture Sessions",
    description: "Explore the richness of traditional and contemporary art forms through interactive workshops.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Podcasts & Discussions",
    description: "Engage in thought-provoking discussions and knowledge-sharing through our curated podcasts.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Upcoming Sessions",
    description: "Stay updated on our upcoming cultural and educational events happening soon!",
    },
   {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Upcoming Sessions",
    description: "Stay updated on our upcoming cultural and educational events happening soon!",
  },
];

const NGOClasses = () => {
  return (
    <div className="ngo-classes-container">
      <h2 className="ngo-classes-heading">Discover Our NGO Classes</h2>
      <div className="ngo-classes-wrapper">
        {ngoClasses.map((session, index) => (
          <div key={index} className="ngo-class-box">
            <div className="ngo-class-content">
              <img src={session.img} alt={session.title} className="ngo-class-image" />
              <div className="ngo-class-info">
                <h2 className="ngo-class-title">{session.title}</h2>
                <p className="ngo-class-description">{session.description}</p>
                <button className="ngo-class-join">Join Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const Explore = () => {
  return (
      <div>
          <ExploreHero />
          <NGOClasses />
          <GallerySlider />
          <Footer />
    </div>
  )
}

export default Explore