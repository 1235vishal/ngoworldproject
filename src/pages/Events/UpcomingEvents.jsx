import React from 'react';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import "../../Styles/Eventbox.css";
import Footer from '../common/Footer'; // Ensure the path is correct if necessary





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
 
];

const EventBox = () => {
  return (
    <div className="event-box-container">
      <h2 className="event-box-heading">Upcoming Events</h2>
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
const UpcomingEvents = () => {
  return (
    <div>
          <EventBox />
          <Footer />
    </div>
  );
};

export default UpcomingEvents;
