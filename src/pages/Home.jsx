import React from 'react';
import BlogSlidere from "./common/BlogScrolling"; // Import the component
import EventSlider from './common/EventScrolling'; // Import the component
import Footer from './common/Footer'; // Ensure the path is correct if necessary
import GallerySlider from "./common/GalleryCarousel"; // Adjust the path as needed
import Hero from "./common/Hero";
import NGOGallery from "./common/NGOGallery"; // Import the component
import SkillSlider from "./common/SkillScrolling"; // Import the component
import Statistics from "./common/Statistics"; // Import the component

const Home = () => {
  return (
      <div>
          <Hero />
          <EventSlider /> 
          <SkillSlider />
          <BlogSlidere />
          <Statistics />
          <NGOGallery />
      <GallerySlider />
      <Footer />  {/* Render Footer */}


    </div>
  )
}

export default Home