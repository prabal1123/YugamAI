import React from "react";
import "../../styles/process.css";

const steps = [
  {
    title: "Discover",
    desc: "Deep research into your business, users, and market landscape.",
  },
  {
    title: "Design",
    desc: "Crafting intuitive interfaces and cohesive design systems.",
  },
  {
    title: "Develop",
    desc: "Building with modern tech stacks and clean architecture.",
  },
  {
    title: "Deploy",
    desc: "Seamless launch with CI/CD and production monitoring.",
  },
  {
    title: "Support",
    desc: "Ongoing optimization, maintenance, and growth.",
  },
];

const Process = () => {
  return (
    <section className="process">

      <div className="process-container">

        <p className="process-subtitle">OUR PROCESS</p>

        <h2 className="process-title">How We Work</h2>

        <div className="process-grid">

          {steps.map((step, index) => (
            <div key={index} className="process-card">

              <div className="process-icon">
                {index + 1}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;