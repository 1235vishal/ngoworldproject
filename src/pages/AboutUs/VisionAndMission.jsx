import React from 'react';
import logo from "../../../public/logo.png"; // Adjust path as needed
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/Vision.css';
import './Styles/VissionBox.css';

const EvolutionJourney = () => {
  return (
    <div className="evolution-container">
      THE EVOLUTION <br />
      OF OUR JOURNEY <br />
      TOGETHER
    </div>
  );
};

const VisionMissionBox = () => {
  return (
    <div className="vision-container">
      <img src={logo} alt="ABT Logo" className="logo" />
      <div className="title">Vision and Mission</div>
      <p className="content">
        Acharya Brahaspati Trust stands as a heartfelt homage to the legacy left
        behind by the much revered Acharya K.C.D. Brahaspati, a stalwart of
        Indian classical music and culture. Founded with the vision of
        preserving and nurturing India’s rich artistic traditions, the Trust
        embodies a deep commitment to ensuring that the melodies, rhythms, and
        narratives of Indian classical arts remain vibrant and relevant for
        generations to come.
      </p>
      <p className="content">
        At its core, the Acharya Brahaspati Trust, through its unwavering
        dedication, seeks to bridge the timeless beauty of classical art forms
        with the modern world, fostering a profound appreciation among people of
        all ages and backgrounds. By serving as a platform for education,
        performance, and collaboration, the trust not only preserves the legacy
        of Acharya K.C.D. Brahaspati but also ignites a passion for the arts
        among young minds. It stands as a testament to the power of music,
        dance, art, and literature to inspire, unite, and elevate society.
      </p>
      <div className="footer">ACHARYA BRAHASPATI TRUST</div>
    </div>
  );
};
const VisionAndMission = () => {
  return (
      <div>
          <EvolutionJourney />
          <VisionMissionBox />
          <Footer />
    </div>
  )
}

export default VisionAndMission