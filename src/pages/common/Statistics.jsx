import React from 'react';
import '../../Styles/Statistics.css'; // Import the external CSS file

const Statistics = () => {
  const stats = [
    { img: "../Number/1.png", number: "142790", label: "Visitors" },
    { img: "../Number/2.png", number: "235+", label: "Donors" },
    { img: "../Number/3.png", number: "25", label: "Members" },
    { img: "../Number/4.png", number: "34", label: "Volunteers" },
  ];

  return (
    <div className="stats-container">
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="stat-card">
              <img src={stat.img} alt={stat.label} className="stat-icon" />
              <h4 className="stat-number">{stat.number}</h4>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
