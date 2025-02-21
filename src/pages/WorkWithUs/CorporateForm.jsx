import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/CustomCarousel.css'; // Import the custom CSS
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import './Styles/VoluteerForm.css';

// Corporate Carousel Component
const CorporateHero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          src="/event/bg1.png" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Join Us as a Corporate Partner</h3>
          <p>Collaborate with Acharya Brahaspati Trust  to create a meaningful impact in society.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          src="/event/bg2.png" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Fulfill Your CSR Goals</h3>
          <p>Partner with us to contribute to community development and social welfare.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src="/event/bg3.png" 
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3>Drive Positive Change</h3>
          <p>Be part of a noble initiative to transform lives through corporate support.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

// Corporate Form Component
const Corporate = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    authorizedPerson: "",
    designation: "",
    email: "",
    phone: "",
    mobile: "",
    officeAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    briefProfile: "",
    occupation: "",
    gstNumber: "",
    panCard: null,
    registrationCertificate: null,
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
    alert("Corporate form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      organizationName: "",
      authorizedPerson: "",
      designation: "",
      email: "",
      phone: "",
      mobile: "",
      officeAddress: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      briefProfile: "",
      occupation: "",
      gstNumber: "",
      panCard: null,
      registrationCertificate: null,
    });
  };

  return (
    <div className="container">
      <h1>CORPORATE</h1>
      <p className="subheading">CORPORATE OF Acharya Brahaspati Trust </p>

      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <img src="/HeropageImage/HeropageImage2.png" alt="Acharya Brahaspati Trust  Event" />

          <div className="corporate-container">
            <div className="eligibility-box">
              <h2>Corporate Partnership:</h2>
              <p>
                Acharya Brahaspati Trust  is a leading NGO in India that supports various social initiatives. Corporate 
                companies can collaborate with us to drive social change and contribute to community development.
              </p>
            </div>

            <div className="eligibility-box">
              <h2>Points to Ponder:</h2>
              <ul>
                <li>A corporate sector should be legalized.</li>
                <li>A corporate sector should not indulge in any illegal work.</li>
                <li>Active participation in social work is required.</li>
                <li>Acharya Brahaspati Trust  holds the right to approve or reject applications.</li>
                <li>Misuse of the Foundation’s name will not be entertained.</li>
              </ul>
            </div>

            <div className="note-box">
              <h2>Note:</h2>
              <p>✅ All details in the form must be true; false details will not be entertained.</p>
              <p>✅ Mandatory fields must be filled with proper documentation/information.</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="organizationName"
              placeholder="Name of Organization *"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="authorizedPerson"
              placeholder="Name of Authorized Person *"
              value={formData.authorizedPerson}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation *"
              value={formData.designation}
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
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
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
              name="officeAddress"
              placeholder="Office Address *"
              value={formData.officeAddress}
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
            <input
              type="text"
              name="gstNumber"
              placeholder="GST Number (Optional)"
              value={formData.gstNumber}
              onChange={handleChange}
            />

            <label>Upload Pan Card *</label>
            <input
              type="file"
              name="panCard"
              accept=".pdf, .jpg, .png"
              onChange={handleChange}
              required
            />

            <label>Upload Registration Certificate *</label>
            <input
              type="file"
              name="registrationCertificate"
              accept=".pdf, .jpg, .png"
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

const CorporateForm = () => {
  return (
      <div>
          <CorporateHero />
          <Corporate />
          <Footer />
      </div>
  )
}

export default CorporateForm;
