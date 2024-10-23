import React from "react";
import './ProjectCard.css';
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="Project 1" />
      <h3>{props.title}</h3>
      <h6>{props.category}</h6>
      <p>
        {props.info}
      </p>
      <a href={props.linkDemo} target="_blank">
        Live Demo
      </a>
      <a href={props.linkRepo} target="_blank">
        Repository
      </a>
    </div>
  );
};

export default ProjectCard;
