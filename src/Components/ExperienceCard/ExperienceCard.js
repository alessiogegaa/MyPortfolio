import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ img, title, duration, description}) => {
  return (
    <div className="experience-card">
      <div className="experience-icon">
        <img src={img} alt="Company Logo" />
      </div>
      <div className="experience-info">
        <h4>{title}</h4>
        <span>{duration}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

