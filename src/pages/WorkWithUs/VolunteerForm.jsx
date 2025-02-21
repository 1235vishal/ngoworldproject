import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/VoluteerForm.css';

// Carousel Component
const VolunteerHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
       <h3>Join Us as a Volunteer</h3>
          <p>Be a part of ACHARYA BRAHASPATI TRUST and make a difference in the lives of those in need.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          src="/event/bg2.png" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Empower Communities</h3>
          <p>Help us support minorities, provide education, and uplift underprivileged sections of society.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src="/event/bg3.png" 
          alt="Third slide" 
        />
        <Carousel.Caption>
       <h3>Make an Impact</h3>
          <p>Volunteer today to contribute your time, skills, and compassion toward meaningful social change.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    occupation: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    briefProfile: "",
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
      companyName: "",
      occupation: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      briefProfile: "",
      idProof: null,
      photo: null,
    });
  };

  return (
    <div className="container">
      <h1>Volunteer</h1>
      <p className="subheading">VOLUNTEER OF ACHARYA BRAHASPATI TRUST</p>

      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <img src="/HeropageImage/HeropageImage2.png" alt="ACHARYA BRAHASPATI TRUST Event" />

          <div className="volunteer-container">
            <div className="eligibility-box">
              <h2>Volunteer Of ACHARYA BRAHASPATI TRUST :</h2>
              <p>
                ACHARYA BRAHASPATI TRUST, a leading NGO in India, offers numerous opportunities 
                to support minorities, people facing poverty, and those seeking government schemes.
              </p>
            </div>

            <div className="eligibility-box">
              <h2>Eligibility Criteria:</h2>
              <ul>
                <li>Person 18 years and above of age.</li>
                <li>Person with no criminal records.</li>
                <li>Person interested in social work.</li>
                <li>Approval of ACHARYA BRAHASPATI TRUST required.</li>
              </ul>
            </div>

            <div className="note-box">
              <h2>Note:</h2>
              <p>✅ Donations given to ACHARYA BRAHASPATI TRUST are eligible for tax benefits.</p>
              <p>✅ All cheque payments should be made in favor of <strong>"ACHARYA BRAHASPATI TRUST"</strong>.</p>
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
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
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
const VolunteerForm = () => {
  return (
      <div>
          <VolunteerHero />
          <Volunteer />
          <Footer />
    </div>
  )
}

export default VolunteerForm