import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <p className="about-subtitle">
            ABOUT YUGAMAI
          </p>

          <h2 className="about-title">
            Built for Scale. <br /> Designed for Impact.
          </h2>

          <p className="about-text">
            Yugamai is a modern IT consultancy that partners with ambitious
            companies to build world-class digital products. We specialize in
            scalable architecture, clean code, performance optimization, and
            production-ready deployments.
          </p>

          <p className="about-text">
            From startups to enterprise, we bring Silicon Valley-grade
            engineering to every project. Our team combines deep technical
            expertise with a relentless focus on design and user experience.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="stat-box">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="stat-box">
            <h3>30+</h3>
            <p>Global Clients</p>
          </div>

          <div className="stat-box">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="stat-box">
            <h3>5+</h3>
            <p>Years of Excellence</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;