import React, { useEffect } from "react";
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import "./Styles/Member.css"; // Ensure you have your CSS styles in a separate file


const BoardMembers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Our Members</h1>
        <p className="sub-heading">
          "BEST NGO FOR CSR IN INDIA: NITYA FOUNDATION"
        </p>
      </header>

      {/* Hero Image */}
      <section className="hero-image">
        <img src={"/HeropageImage/HeropageImage1.png"} alt="Board Members Image" />
      </section>

      {/* Board Members Section */}
      <section className="board-section">
        <h2>Our Members</h2>
        <p className="meet">MEET</p>
        <div className="board-container">
          <div className="member-card">
            <img src={"/HeropageImage/HeropageImage2.png"} alt="Anil Kumar" />
            <h3>Lorem, ipsum dolor</h3>
            <p className="position">General Secretary</p>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odit atque at, odio assumenda quam officia vel ducimus
              repudiandae nisi.
            </p>
          </div>
          <div className="member-card">
            <img src={"/HeropageImage/HeropageImage1.png"} alt="Varsha Jain" />
            <h3>Lorem, ipsum dolor.</h3>
            <p className="position">President</p>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              sunt culpa impedit a quos cum eos ex ad provident. Dolorem.
            </p>
          </div>
          <div className="member-card">
            <img src={"/HeropageImage/HeropageImage1.png"} alt="Vipin Kumar Jain" />
            <h3>Lorem, ipsum dolor.</h3>
            <p className="position">Treasurer</p>
            <p className="bio">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>Discover About Us</h2>
        <p className="learn">LEARN ABOUT NON PROFIT AGENCY</p>
        <div className="about-container">
          <img src={"/HeropageImage/HeropageImage2.png"} alt="About Us Image" />
          <div className="about-text">
            <p>
              " The trust works tirelessly to ensure that classical music, dance,
              art, and literature continue to inspire future generations.
              Through education, performances, workshops, and research, it
              fosters a deep appreciation for India’s timeless artistic
              expressions. By organizing stage concerts, lecture-demonstrations,
              symposiums, and artist meet-ups, the trust creates platforms for
              artists to learn, collaborate, and perform.
              <br />
              Acharya Brahaspati Trust also nurtures young talent by providing
              learning opportunities and resources, ensuring that classical
              traditions are passed down with authenticity and excellence.
              Inspired by the legacy of Acharya K.C.D. Brahaspati, who
              contributed immensely to musicology and cultural studies, the
              trust remains steadfast in its mission of artistic preservation.
              <br />
              By celebrating and sustaining India’s artistic heritage, Acharya
              Brahaspati Trust continues to be a beacon of cultural integrity,
              uniting communities through the power of music and the arts. "
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};



const Members = () => {
  return (
      <div>
          <BoardMembers />
          <Footer />
    </div>
  )
}

export default Members