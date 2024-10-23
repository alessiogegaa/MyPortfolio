import React from "react";
import { useParams } from "react-router-dom";
import { ProjectData } from "../Data/data";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = ProjectData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div className="pd-not-found">Project not found!</div>;
  }

  return (
    <section className="pd-project-details">
      <div className="pd-project-details-content">
        <img src={project.img} alt={project.title} className="pd-project-image" />
        <div className="pd-project-info">
          <h2 className="pd-project-title">{project.title}</h2>
          <p className="pd-project-description">{project.info}</p>
          <p className="pd-project-category">
            <span className="pd-category-label">Category:</span> {project.category}
          </p>
          <div className="pd-project-links">
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-link-button"
            >
              Live Demo
            </a>
            <a
              href={project.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-link-button"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
