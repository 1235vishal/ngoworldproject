import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Contact.css"; // Import Contact form CSS
import "../Styles/CustomCarousel.css"; // Import Carousel CSS
import Footer from './common/Footer'; // Ensure the path is correct if necessary
import GallerySlider from "./common/GalleryCarousel"; // Adjust the path as needed
// Carousel Component
// Event Carousel Component
const EventCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="/event/bg1.png" alt="First slide" />
        <Carousel.Caption>
          <h3>Community Empowerment</h3>
          <p>Join hands with us to support and uplift underprivileged communities.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="/event/bg2.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Education for All</h3>
          <p>We believe in providing quality education to every child, shaping a brighter future.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/event/bg3.png" alt="Third slide" />
        <Carousel.Caption>
          <h3>Healthcare Initiatives</h3>
          <p>Ensuring access to healthcare facilities and spreading health awareness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


// Contact Form & Map Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to send data to backend (API call)
  };

  return (
    <section className="contact-container">
      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Let's Connect with Shivshakti PG</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Shivshakti PG Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8395853624!2d77.06889930924616!3d28.527582010931558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f5699dffd%3A0x6b11d618d2b7e7db!2sDelhi!5e0!3m2!1sen!2sin!4v1671990070812!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="info-box">
          <div>
            <h2>Address</h2>
            <p>Shivshakti PG, Delhi, India</p>
          </div>
          <div>
            <h2>Email</h2>
            <a href="mailto:example@email.com">example@email.com</a>
            <h2>Phone</h2>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Contact Page (Carousel + Contact)
const Contact = () => {
  return (
    <div>
      <EventCarousel />
          <ContactSection />
          <GallerySlider />
          <Footer />
    </div>
  );
};

export default Contact;
