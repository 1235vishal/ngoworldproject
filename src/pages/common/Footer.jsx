import React from 'react';
import '../../Styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Navigation */}
        <div className="footer-nav">
          <div className="footer-section">
            <h3>Events</h3>
            <ul>
              <li><a href="/events">All Events</a></li>
              <li><a href="/events/recent">Recent Events</a></li>
              <li><a href="/events/upcoming">Upcoming Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
                      <ul>
              <li><a href="/explore">Explore Main</a></li>
              <li><a href="/explore/classical-music">Classical Music Sessions</a></li>
              <li><a href="/explore/classical-dance">Classical Dance Sessions</a></li>
              <li><a href="/explore/art-culture">Art and Culture Sessions</a></li>
              <li><a href="/explore/upcoming-sessions">Upcoming Sessions</a></li>
              <li><a href="/explore/podcasts">Podcasts/Youtube</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Work with us</h3>
            <ul>
              <li><a href="/work/corporate-form">corporate form</a></li>
              <li><a href="/work/volunteer-form">Join as Volunteer</a></li>
             <li><a href="/work/individual-form">Join as Individual</a></li>
             <li><a href="/work/intern-form">Join as Intern</a></li>
              <li><a href="/work/artist-form">Join as Artist</a></li>

            </ul>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="/about/vision-mission">Vision and Mission</a></li>
              <li><a href="/about/acharya-brahaspati">Acharya Brahaspati</a></li>
              <li><a href="/about/members">Members</a></li>
            <li><a href="/about/OurMission">Our Mission</a></li>
            <li><a href="/gallery">Image Gallery</a></li>

            </ul>
          </div>
          <div className="footer-section">
            <h3>Archive</h3>
            <ul>
              <li><a href="/archives">Archive Main</a></li>
              <li><a href="/archives/blog">ABT Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* Logo Section */}
        <div className="footer-logo">
          <img src="../../../public/logo.png" alt="Website Logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 Acharya Brahaspati Trust. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
