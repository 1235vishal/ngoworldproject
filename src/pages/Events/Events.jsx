import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import "../../Styles/Eventbox.css";
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import GallerySlider from "../common/GalleryCarousel"; // Adjust the path as needed
import "./Styles/EventHero.css"; // Ensure this file exists for styling


// Carousel Component
const EventHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="/event/bg1.png" alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Empowering Communities</h3>
          <p>
            Join us in making a difference by supporting education, healthcare, and sustainable development for underprivileged communities.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img src="/event/bg2.png" alt="Second slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Volunteer for a Cause</h3>
          <p>
            Be the change! Participate in our volunteering programs to help uplift marginalized groups and create a better future.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/event/bg3.png" alt="Third slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Spreading Hope & Kindness</h3>
          <p>
            Through various NGO-led initiatives, we aim to spread love, provide relief, and support those in need.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


// Event data
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
   {
    img: "/HeropageImage/HeropageImage4.jpg",
    name: "Video Editing Masterclass",
    description: "Enhance your video editing skills with top professionals in the field.",
    date: "July 12, 2025",
  },
];

const EventBox = () => {
  return (
    <div className="event-box-container">
      <h2 className="event-box-heading">In the Featured Events</h2>
      <div className="event-box-wrapper">
        {events.map((event, index) => (
          <div key={index} className="event-box-item">
            <div className="event-box-content">
              <img src={event.img} alt="Event" className="event-box-image" />
              <div className="event-box-info">
                <h2 className="event-box-title">{event.name}</h2>
                <p className="event-box-description">{event.description}</p>
                <p className="event-box-date">📅 {event.date}</p>
                <button className="event-box-view-more">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Events Page
const Events = () => {
  return (
    <div>
          <EventHero />
          <EventBox />
          <GallerySlider />
          <Footer />
    </div>
  );
};

export default Events;
