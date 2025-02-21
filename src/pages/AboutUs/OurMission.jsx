import React from 'react';
import logo from "../../../public/logo.png"; // Adjust path as needed
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/OurMission.css';
import './Styles/Vision.css';
const EvolutionJourneyMission = () => {
  return (
    <div className="evolution-container">
      THE EVOLUTION <br />
      OF OUR JOURNEY <br />
      TOGETHER
    </div>
  );
};

const VisionMission = () => {
  return (
    <div className="vision-container">
      <img src={logo} alt="ABT Logo" className="logo" />
      <div className="title">Our Mission</div>
      <p className="content">
        The Acharya Brahaspati Trust is dedicated to the promotion, preservation, and 
        proliferation of Indian classical music, dance, art, and literature. Its objectives are:
      </p>
      <p className="content">
        <strong>1)</strong> To create platforms for the education and performance of classical art forms 
        through stage concerts, lecture-demonstrations, seminars, workshops, symposiums, 
        and artist meet-ups.
      </p>
      <p className="content">
        <strong>2)</strong> To nurture talent by providing facilities and opportunities for learning and 
        mastering these art forms.
      </p>
      <p className="content">
        <strong>3)</strong> To foster cultural appreciation by organizing events that connect 
        communities with India’s artistic heritage.
      </p>
      <p className="content">
        <strong>4)</strong> To honor the legacy of Acharya K.C.D. Brahaspati by sustaining his vision 
        of cultural preservation and artistic excellence.
      </p>
      <p className="content">
        Through these endeavors, the trust continues to be a beacon of cultural integrity, 
        inspiring a deeper connection to India’s timeless artistic treasures.
      </p>
      <div className="footer">ACHARYA BRAHASPATI TRUST</div>
    </div>
  );
};


const HighlightedPersonalities = () => {
  return (
      <div>
          <EvolutionJourneyMission />
          <VisionMission />
          <Footer />
    </div>
  )
}

export default HighlightedPersonalities