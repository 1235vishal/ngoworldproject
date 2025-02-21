import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/CustomCarousel.css'; // Import the custom CSS
import '../Styles/Support.css';
import Footer from './common/Footer'; // Ensure the path is correct if necessary

// Carousel Component
const IndividualIntervalsExample = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Support Our Mission</h3>
          <p>Join us in making a difference. Your support helps us grow and create impactful experiences.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          src="/event/bg2.png" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Be a Part of the Change</h3>
          <p>Contribute today and help us bring meaningful initiatives to life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src="/event/bg3.png" 
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3>Empower Through Support</h3>
          <p>Your generosity fuels our efforts in promoting culture, education, and innovation.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};



const WaysToSupport = () => {
  return (
    <section className="support-section">
      <h2>Ways to Support</h2>
      <div className="support-container">
        <div className="support-box">
          <h3>Donate Funds</h3>
          <p>Your contributions help us fund our initiatives.</p>
          <button className="btn">Donate</button>
        </div>
        <div className="support-box">
          <h3>Volunteer with Us</h3>
          <p>Join our team and make a direct impact.</p>
          <button className="btn">Get Involved</button>
        </div>
        <div className="support-box">
          <h3>Spread the Word</h3>
          <p>Share our mission on social media.</p>
          <button className="btn">Share</button>
        </div>
      </div>
    </section>
  );
};

const testimonialsData = [
  { text: "I am proud to be part of this amazing community.", author: "Jane Smith, Volunteer" },
  { text: "This organization has changed my life!", author: "John Doe, Donor" },
  { text: "A truly inspiring community of change-makers.", author: "Emily Brown, Supporter" }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <div className="testimonial-container" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonialsData.map((item, i) => (
            <div key={i} className="testimonial-box">
              <p>{item.text}</p>
              <strong>{item.author}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {testimonialsData.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)}></span>
        ))}
      </div>
    </section>
  );
};



const PartnerLogos = () => {
  return (
    <div className="partners-container">
      <div className="partners-slider-wrapper">
        <div className="partners-slider">
          {/* First set of logos */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" alt="Tesla Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" />


          {/* Duplicate set for seamless looping */}
       <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" alt="Tesla Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" />


        </div>
      </div>
    </div>
  );
};

const SupportUs = () => {
  return (
      <div>
          <IndividualIntervalsExample />
          <WaysToSupport />
          <Testimonials />
          <PartnerLogos />
          <Footer />



    </div>
  )
}

export default SupportUs