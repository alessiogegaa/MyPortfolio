import React from "react";
const ServiceCard = ({ img, title, text, className  }) => {
    return (
      <div className={className}>
        <img src={img} alt={title} />
        <div className="skill-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    )
};

export default ServiceCard;
