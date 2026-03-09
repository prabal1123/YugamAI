import React, { useState } from "react";
import "../../styles/portfolio.css";

const projects = [
  {
    title: "DigiKuber",
    desc: "Smart digital finance platform helping users track investments and financial growth.",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "SaaS",
  },
  {
    title: "TheHappyCandles",
    desc: "Luxury e-commerce store for premium handmade candles with seamless checkout.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    category: "E-Commerce",
  },
  {
    title: "RaceMate",
    desc: "Real-time running companion app that tracks distance, safety zones, and performance.",
    tech: ["React Native", "Firebase", "Maps"],
    category: "Mobile",
  },
  {
    title: "Fitness App",
    desc: "Health and workout tracking application with personalized training plans.",
    tech: ["React Native", "Supabase", "Expo"],
    category: "Mobile",
  },
];

const filters = ["All", "Web", "Mobile", "SaaS", "E-Commerce"];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="portfolio">

      <div className="portfolio-container">

        <p className="portfolio-subtitle">PORTFOLIO</p>

        <h2 className="portfolio-title">Our Work</h2>

        <p className="portfolio-desc">
          A curated selection of projects that showcase our commitment
          to excellence and innovation.
        </p>

        {/* FILTERS */}
        <div className="portfolio-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={active === filter ? "active" : ""}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="portfolio-grid">

          {filtered.map((project, i) => (
            <div key={i} className="portfolio-card">

              <div className="portfolio-image">
                {project.title}
              </div>

              <div className="portfolio-content">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="portfolio-tags">
                  {project.tech.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="portfolio-links">
                  <a href="#">Live Preview</a>
                  <a href="#">Case Study</a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Portfolio;