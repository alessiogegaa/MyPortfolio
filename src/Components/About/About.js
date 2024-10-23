import React from 'react'
import './About.css'
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/enterprise.png"
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { ExperienceData } from '../Data/data'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-left-container">
        <img src={img1} alt="Profile Picture" />
      </div>
      <div className="about-right-container">
        <h6>ABOUT ME</h6>
        <h2>I Develop Systems that Work</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in <br />culpa
          qui officia deserunt mollit anim id est laborum. Nulla pariatur
          excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>Oremque laudantium, totaeaque ipsa quae</p>

        <div className="experience">
          <h3>Experience</h3>
          <div style={{display: 'flex', flexDirection:'column', padding: 0}}>
            {ExperienceData.map((item)=>{
              return(
                <ExperienceCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                />
              )
            })}
          </div>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default About