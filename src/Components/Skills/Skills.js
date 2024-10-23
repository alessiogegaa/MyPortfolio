import React from 'react'
import img1 from "../../assets/img1.jpg"
import './Skills.css'
import { SkillsData } from '../Data/data'
import SkillsCard from '../ServiceCard/ServiceCard'; 
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
    <div className="skills-content">
      <h2 className="section-title" style={{color: "black"}}>My Skills</h2>
      <p className="section-description">
        I have gained expertise in various technologies that allow me to
        deliver high-quality solutions across different platforms.
      </p>
      <div className="skills-list">
        {SkillsData.map((item)=>{
          return(
            <SkillsCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              className={item.className}
            />
          )
        })} 
      </div>
    </div>
    <div className="skills-image">
      <img src={img1} alt="Skills Image" className="skills-img" />
    </div>
  </section>
  )
}

export default Skills