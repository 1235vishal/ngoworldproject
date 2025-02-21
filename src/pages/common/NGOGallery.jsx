import React from "react";
import "../../Styles/NGOGallery.css"; // Import the CSS file

const NGOGallery = () => {
  // Different image sets for each row
  const row1Images = [
    "../../../public/mainImage/1.jpg",
    "../../../public/mainImage/2.jpg",
    "../../../public/mainImage/3.jpg",
    "../../../public/mainImage/4.jpg",
    "../../../public/mainImage/5.jpg",
  ];

  const row2Images = [
    "../../../public/mainImage/6.jpg",
    "../../../public/mainImage/7.jpg",
    "../../../public/mainImage/8.jpg",
    "../../../public/mainImage/9.jpg",
    "../../../public/mainImage/10.jpg",
  ];

  return (
    <div className="imageworld">
      <h2 className="title">The Heart of Our NGO</h2>

      {/* First Row (Infinite Left to Right Scrolling) */}
      <div className="scroll-container left-to-right">
        <div className="scroll-content">
          {row1Images.concat(row1Images).map((src, index) => (
            <img key={index} src={src} alt={`Row 1 Image ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Second Row (Infinite Right to Left Scrolling) */}
      <div className="scroll-container right-to-left">
        <div className="scroll-content">
          {row2Images.concat(row2Images).map((src, index) => (
            <img key={index} src={src} alt={`Row 2 Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOGallery;
