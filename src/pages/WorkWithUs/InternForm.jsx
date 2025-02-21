import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/VoluteerForm.css';

// Carousel Component
const NGOInternshipHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Join as an Intern</h3>
          <p>Be a part of Acharya Brahaspati Trust  and make a difference in the community.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          src="/event/bg2.png" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Gain Valuable Experience</h3>
          <p>Work on impactful projects and develop your skills in social service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src="/event/bg3.png" 
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3>Be a Changemaker</h3>
          <p>Intern with us to create real-world solutions and help those in need.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const NGOInternship = () => {
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
      <h1>NGO-Internship</h1>
      <p className="subheading">Internship at Acharya Brahaspati Trust </p>

      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <img src="/HeropageImage/HeropageImage2.png" alt="Acharya Brahaspati Trust  Event" />

          <div className="internship-container">
            <div className="note-box">
              <h2>NGO-Internship Plan in Acharya Brahaspati Trust :</h2>
              <p>
                Welcome to **Acharya Brahaspati Trust **, where passion meets purpose! 
                Embark on a rewarding journey with our **unpaid NGO internships in Delhi**. 
                Our commitment to fostering positive change empowers you to make a tangible impact while gaining invaluable experience.
                Explore the dynamic realm of social service through hands-on projects and initiatives, contributing to real-world solutions.
              </p>
              <p>
                At **Acharya Brahaspati Trust **, we understand the importance of nurturing future changemakers. 
                Whether you’re seeking **on-site or online NGO internships**, our diverse opportunities cater to your skills and interests.
                Immerse yourself in a collaborative environment that encourages innovation and personal growth.
              </p>
              <p>
                Join us in creating a meaningful difference. Discover the power of your potential with **Acharya Brahaspati Trust **—your gateway to impactful internships and a transformative experience. 
                Explore the possibilities and be a **catalyst for change**. Apply now for an internship that **transcends boundaries** and leaves a lasting imprint on the community we serve.
              </p>
            </div>

            <div className="note-box">
              <h2>Note:</h2>
              <p>✅ Donations given to **Acharya Brahaspati Trust ** are eligible for deduction u/s 80G of the Income Tax Act,1961.</p>
              <p>✅ All cheque payments should be made in favor of **"Acharya Brahaspati Trust "**.</p>
              <p>✅ **Online payment facility is also available** at Acharya Brahaspati Trust .</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="right-section">
          <h2>Join as an Intern Form</h2>
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

const  InternForm = () => {
  return (
      <div>
          <NGOInternshipHero />
          <NGOInternship />
          <Footer />
    </div>
  )
}

export default  InternForm;
