import React from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard.js";
import { serviceData } from "../Data/data";
const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title" style={{ color: "white" }}>
        What I offer
      </h2>
      <div className="service-grid">
        {serviceData.map((item) => {
          return(
          <ServiceCard
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
            className={item.className}
          />
          )
        })}
      </div>
    </section>
  );
};

export default Services;
