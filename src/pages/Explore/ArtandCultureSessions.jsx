import React from 'react';
import './Styles/NGOClasses.css';


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
      <h2 className="ngo-classes-heading">Discover Our NGO Arts & Culurters </h2>
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

const ArtandCultureSessions = () => {
  return (
      <div>
          <NGOClasses />
    </div>
  )
}

export default ArtandCultureSessions