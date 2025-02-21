import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css';
import Footer from '../common/Footer';
import './Styles/VoluteerForm.css';

// Carousel Component
const IndividualHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Join as an Individual Member</h3>
          <p>Be a part of Acharya Brahaspati Trust  and make a difference in the lives of those in need.</p>
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
          <p>Join today to contribute your time, skills, and compassion toward meaningful social change.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const IndividualMemberForm = () => {
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
      idProof: null,
      photo: null,
    });
  };

  return (
    <div className="container">
      <h1>JOIN AS AN INDIVIDUAL MEMBER</h1>
      <p className="subheading">Become a Member of Acharya Brahaspati Trust </p>

      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <img src="/HeropageImage/HeropageImage2.png" alt="Acharya Brahaspati Trust  Event" />

          <div className="membership-container">
            <div className="note-box">
              <h2>Individual Member Of Acharya Brahaspati Trust  :</h2>
              <p>
                Acharya Brahaspati Trust  is one of the best NGOs in India. It not only allows individuals to volunteer 
                but also offers the golden opportunity to become a part of our esteemed organization.  
              </p>
              <p>
                If you want to be a part of our initiative, carefully go through the eligibility criteria 
                and fill out the form below. You can also directly contact us for more details.
              </p>
            </div>

            <div className="note-box">
              <h2>Eligibility Criteria:</h2>
              <ul>
                <li>Person 18 years and above.</li>
                <li>No criminal records.</li>
                <li>Interest in social work.</li>
                <li>Acharya Brahaspati Trust  reserves the right to approve/reject applications.</li>
                <li>Strict action will be taken against misuse of the foundation’s name.</li>
              </ul>
            </div>

            <div className="note-box">
              <h2>Note:</h2>
              <p>✅ Donations given to Acharya Brahaspati Trust  are eligible for deduction u/s 80G of the Income Tax Act, 1961.</p>
              <p>✅ All cheque payments should be made in favor of <strong>"Acharya Brahaspati Trust "</strong>.</p>
              <p>✅ Online payment facility is also available on the Acharya Brahaspati Trust  website.</p>
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

const IndividualForm = () => {
  return (
    <div>
      <IndividualHero />
      <IndividualMemberForm />
      <Footer />
    </div>
  );
};

export default IndividualForm;
