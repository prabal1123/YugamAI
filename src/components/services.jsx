import React from "react";
import "../../styles/services.css";

const services = [
  {
    title: "Web Development",
    desc: "High-performance web applications built with modern frameworks, optimized for speed, SEO, and scalability.",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that delight users and drive engagement on every device.",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, research-driven design systems that blend beauty with function for exceptional user experiences.",
  },
  {
    title: "Backend & Cloud Architecture",
    desc: "Robust, scalable backend systems and cloud infrastructure engineered for reliability and performance.",
  },
  {
    title: "Deployment & DevOps",
    desc: "Streamlined CI/CD pipelines, automated deployments, and monitoring for zero-downtime operations.",
  },
];

const Services = () => {
  return (
    <section className="services">

      <div className="services-container">

        <p className="services-subtitle">WHAT WE DO</p>

        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div key={index} className="service-card">

              <div className="service-icon">
                ●
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;