import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

const CustomNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="top-right-container">
          <span><i className="fas fa-envelope"></i> info@nityango.org</span>
          <span><i className="fas fa-phone"></i> +91 9818885691</span>
          <button className="sidebar-toggle-btn" onClick={handleSidebarShow}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>

      {/* Sidebar Offcanvas */}
      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {/* Events Dropdown */}
            <NavDropdown
              title="📅 Events"
              id="sidebar-events"
              show={openDropdown === "events"}
              onMouseEnter={() => setOpenDropdown("events")}
              onMouseLeave={handleMouseLeave}
                      >
                          <NavDropdown.Item as={Link} to="/events" onClick={handleSidebarClose}>
    📅 Events (Main Page)
  </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/recent" onClick={handleSidebarClose}>
                🕒 Recent Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/upcoming" onClick={handleSidebarClose}>
                ⏳ Upcoming Events
              </NavDropdown.Item>
            </NavDropdown>

            {/* Explore Dropdown */}
            <NavDropdown
              title="🔍 Explore"
              id="sidebar-explore"
              show={openDropdown === "explore"}
              onMouseEnter={() => setOpenDropdown("explore")}
              onMouseLeave={handleMouseLeave}
                      >
                          <NavDropdown.Item as={Link} to="/explore"  onClick={handleSidebarClose}>
    🔍 Explore (Main Page)
  </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/classical-music" onClick={handleSidebarClose}>
                🎵 Classical Music
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/classical-dance" onClick={handleSidebarClose}>
                💃 Classical Dance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/art-culture" onClick={handleSidebarClose}>
                🎨 Art & Culture
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/podcasts" onClick={handleSidebarClose}>
                🎧 Podcasts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/upcoming-sessions" onClick={handleSidebarClose}>
                ⏳ Upcoming Sessions
              </NavDropdown.Item>
            </NavDropdown>

            {/* Archives Dropdown */}
            <NavDropdown
              title="📂 Archives"
              id="sidebar-archives"
              show={openDropdown === "archives"}
              onMouseEnter={() => setOpenDropdown("archives")}
              onMouseLeave={handleMouseLeave}
                      >
                           <NavDropdown.Item as={Link} to="/archives" onClick={handleSidebarClose}>
    📂 Archives (Main Page)
  </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/archives/blog" onClick={handleSidebarClose}>
                📝 ABT Blog
              </NavDropdown.Item>
            </NavDropdown>

            {/* Work With Us Dropdown */}
            <NavDropdown
              title="👥 Work With Us"
              id="sidebar-work"
              show={openDropdown === "work"}
              onMouseEnter={() => setOpenDropdown("work")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/work/corporate-form" onClick={handleSidebarClose}>
                🏢 Corporate Form
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/volunteer-form" onClick={handleSidebarClose}>
                🤝 Join as Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/individual-form" onClick={handleSidebarClose}>
                👤 Join as Individual
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/intern-form" onClick={handleSidebarClose}>
                🎓 Join as Intern
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work/artist-form" onClick={handleSidebarClose}>
                🖌️ Join as Artist
              </NavDropdown.Item>
            </NavDropdown>

            {/* About Us Dropdown */}
            <NavDropdown
              title="ℹ️ About Us"
              id="sidebar-about"
              show={openDropdown === "about"}
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/about/vision-mission" onClick={handleSidebarClose}>
                👁️ Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/acharya-brahaspati" onClick={handleSidebarClose}>
                🎖️ Acharya Brahaspati
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/members" onClick={handleSidebarClose}>
                👥 Members
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/OurMission" onClick={handleSidebarClose}>
                ⭐ Our Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery" onClick={handleSidebarClose}>
                🖼️ Image Gallery
              </NavDropdown.Item>
            </NavDropdown>

            {/* Other Links */}
            <Nav.Link as={Link} to="/supportus" className="SV" onClick={handleSidebarClose}>
              🤲 Support Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="SC" onClick={handleSidebarClose}>
              ✉️ Contact
            </Nav.Link>
          </Nav>

          {/* Donate Button */}
          <div className="donate-container">
            <Link to="https://rzp.io/rzp/eZrT85c" className="donate-btn" onClick={handleSidebarClose}>
              ❤️ Donate Now
            </Link>
          </div>
        </Offcanvas.Body>
          </Offcanvas>
          {/* Desktop Navbar */}
      <Navbar expand="lg" className="main-navbar">
        <Container>
         <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mx-auto">
    <NavDropdown
      title={<Link to="/events" className="dropdown-link">Events</Link>}
      id="events-dropdown"
      show={openDropdown === "events"}
      onMouseEnter={() => setOpenDropdown("events")}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item as={Link} to="/events/recent">Recent Events</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/events/upcoming">Upcoming Events</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown
      title={<Link to="/explore" className="dropdown-link">Explore</Link>}
      id="explore-dropdown"
      show={openDropdown === "explore"}
      onMouseEnter={() => setOpenDropdown("explore")}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item as={Link} to="/explore/classical-music">Classical Music</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/explore/classical-dance">Classical Dance</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/explore/art-culture">Art & Culture</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/explore/podcasts">Podcasts</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/explore/upcoming-sessions">Upcoming Sessions</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown
      title={<Link to="/archives" className="dropdown-link">Archives</Link>}
      id="archives-dropdown"
      show={openDropdown === "archives"}
      onMouseEnter={() => setOpenDropdown("archives")}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item as={Link} to="/archives/blog">ABT Blog</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown
      title="Work With Us"
      id="work-dropdown"
      show={openDropdown === "work"}
      onMouseEnter={() => setOpenDropdown("work")}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item as={Link} to="/work/corporate-form">Corporate Form</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/work/volunteer-form">Join as Volunteer</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/work/individual-form">Join as Individual</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/work/intern-form">Join as Intern</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/work/artist-form">Join as Artist</NavDropdown.Item>
    </NavDropdown>

    {/* About Us Dropdown - Newly Added */}
    <NavDropdown
      title="About Us"
      id="about-dropdown"
      show={openDropdown === "about"}
      onMouseEnter={() => setOpenDropdown("about")}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item as={Link} to="/about/vision-mission">Vision & Mission</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/about/acharya-brahaspati">Acharya Brahaspati</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/about/members">Members</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/about/OurMission">Our Mission</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/gallery">Image Gallery</NavDropdown.Item>
    </NavDropdown>

    <Nav.Link as={Link} to="/supportus">Support Us</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
  </Nav>

  {/* Donate Button */}
  <div className="donate-container">
    <Link to="https://rzp.io/rzp/eZrT85c" className="donate-btn">❤️ Donate Now</Link>
  </div>
</Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
