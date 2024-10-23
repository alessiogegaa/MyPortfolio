import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { ProjectData } from "../Data/data";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = ProjectData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="category-filter">
        <button
          className={`category-btn ${
            selectedCategory === "All" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        <button
          className={`category-btn ${
            selectedCategory === "React" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("React")}
        >
          React
        </button>
        <button
          className={`category-btn ${
            selectedCategory === "HTML/CSS" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("HTML/CSS")}
        >
          HTML/CSS
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((item) => (
          <div className="project-card" key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                className="project-card-image"
              />
            <div className="project-card-content">
            <Link to={`/project/${item.id}`} className="project-card-link">
              <h3 className="project-card-title">{item.title}</h3>
              </Link>
              <p className="project-card-category">{item.category}</p>
              <div className="project-card-links">
                <a href={item.linkDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={item.linkRepo} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
