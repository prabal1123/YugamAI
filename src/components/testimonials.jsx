import React from "react";
import "../../styles/testimonials.css";

const testimonials = [
  {
    text: "Yugamai transformed our vision into a product that exceeded every expectation. Their attention to detail and technical prowess is unmatched.",
    name: "Sudeep Roy",
    role: "CEO, Finova Technologies",
  },
  {
    text: "Working with Yugamai felt like having a world-class engineering team in-house. They delivered on time, on budget, and beyond scope.",
    name: "Atarpan Dasgupta",
    role: "CTO, Atlas Group",
  },
  {
    text: "The quality of code and design they delivered set a new standard for our organization. A truly premium experience from start to finish.",
    name: "Ritesh Singh",
    role: "VP Product, GreenPulse",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <p className="testimonials-subtitle">
          TESTIMONIALS
        </p>

        <h2 className="testimonials-title">
          What Clients Say
        </h2>

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">

              <div className="quote-icon">“</div>

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-author">

                <h4>{item.name}</h4>

                <span>{item.role}</span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;