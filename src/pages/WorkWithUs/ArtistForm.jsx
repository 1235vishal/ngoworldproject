import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/VoluteerForm.css';

// Carousel Component
const CareerHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Career Plan in Acharya Brahaspati Trust </h3>
          <p>Explore paid/unpaid internships and career opportunities to make a social impact.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          src="/event/bg2.png" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Enhance Your Skills</h3>
          <p>Join us to develop leadership, problem-solving, and social innovation skills.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src="/event/bg3.png" 
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3>Be a Change Maker</h3>
          <p>Work for the greater good and contribute to meaningful social change.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

// Career Form Component
const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    briefProfile: "",
    achievements: "",
    idProof: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      occupation: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      briefProfile: "",
      achievements: "",
      idProof: null,
      photo: null,
    });
  };

  return (
    <div className="container">
      <h1>Career Plan in Acharya Brahaspati Trust </h1>
      <p className="subheading">Join Us and Build Your Career in Social Work</p>

      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <img src="/HeropageImage/HeropageImage2.png" alt="Career in Acharya Brahaspati Trust " />

          <div className="career-container">
            <div className="career-box">
              <h2>Career Plan in Acharya Brahaspati Trust :</h2>
              <p>
                Acharya Brahaspati Trust  is one of the best NGOs in India, offering career options and internship opportunities. 
                These experiences help individuals develop social skills, problem-solving abilities, and a vision as social innovators.
              </p>
            </div>

            <div className="career-box">
              <h2>Paid vs. Unpaid Internships:</h2>
              <p>💰 **Paid Internship**: Earn while you learn, fulfill daily needs, and become self-dependent.</p>
              <p>🤝 **Unpaid Internship**: Gain hands-on experience in social work and showcase your commitment to the greater good.</p>
            </div>

            <div className="note-box">
              <h2>Want to Join Us?</h2>
              <p>
                Enhance your skills and contribute to society. Fill out the form below or reach out to us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation *"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address *"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State *"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country *"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip/ Pin Code *"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <textarea
              name="briefProfile"
              placeholder="Brief Profile *"
              value={formData.briefProfile}
              onChange={handleChange}
              required
            ></textarea>

            <textarea
              name="achievements"
              placeholder="Achievements *"
              value={formData.achievements}
              onChange={handleChange}
              required
            ></textarea>

            <label>Upload ID Proof *</label>
            <input
              type="file"
              name="idProof"
              accept=".pdf, .jpg, .png"
              onChange={handleChange}
              required
            />

            <label>Upload Photo *</label>
            <input
              type="file"
              name="photo"
              accept=".jpg, .png"
              onChange={handleChange}
              required
            />

            <div className="btn-group">
              <button type="reset" className="reset-btn" onClick={handleReset}>
                RESET
              </button>
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ArtistForm = () => {
  return (
      <div>
          <CareerHero />
          <Career />
          <Footer />
    </div>
  )
}

export default ArtistForm;
