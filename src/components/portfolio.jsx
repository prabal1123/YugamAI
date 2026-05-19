import React, { useState } from "react";
import "../../styles/portfolio.css";

const projects = [
  {
    title: "DigiKuber",
    desc: "Smart digital finance platform helping users track investments and financial growth.",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "SaaS",
    image: "https://bybxickqlfiirrjkvuoq.supabase.co/storage/v1/object/public/Work/Invest%20in%20Real%20Gold.png",
    liveUrl: "https://digitalquber.com/"
  },
  {
    title: "TheHappyCandles",
    desc: "Luxury e-commerce store for premium handmade candles with seamless checkout.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    category: "E-Commerce",
    image: "https://bybxickqlfiirrjkvuoq.supabase.co/storage/v1/object/public/Work/Illuminate%20Your%20Moments.png",
    liveUrl: "https://www.thehappycandles.com/"
  },
  {
    title: "RaceMate",
    desc: "Real-time running companion app that tracks distance, safety zones, and performance.",
    tech: ["React Native", "Firebase", "Maps"],
    category: "Mobile",
    image: "https://bybxickqlfiirrjkvuoq.supabase.co/storage/v1/object/public/Work/Racemate.png",
    liveUrl: "#" // Left empty as not deployed yet
  },
  {
    title: "Fitness App",
    desc: "Health and workout tracking application with personalized training plans.",
    tech: ["React Native", "Supabase", "Expo"],
    category: "Mobile",
    image: "https://bybxickqlfiirrjkvuoq.supabase.co/storage/v1/object/public/Work/Compete.%20Connect..png",
    liveUrl: "https://health-app-8ulh.vercel.app/"
  },
  {
    title: "In-Sight App",
    desc: "An advanced tracking and insight application engineered for high performance.",
    tech: ["React", "Supabase", "TypeScript"],
    category: "SaaS",
    image: "https://bybxickqlfiirrjkvuoq.supabase.co/storage/v1/object/public/Work/Help%20App.png",
    liveUrl: "https://i-need-help-nu.vercel.app/"
  }
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

        {/* FILTER BUTTONS */}
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
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-img-link">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-display-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </a>
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Preview</a>
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