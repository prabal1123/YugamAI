// import React from "react";
// import "../../styles/hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">

//       <div className="hero-content">

//         <p className="hero-subtitle">
//           PREMIUM DIGITAL ENGINEERING
//         </p>

//         <h1 className="hero-title">
//           Engineering the Future <br />
//           of Digital Products
//         </h1>

//         <p className="hero-description">
//           We design, develop, and deploy scalable, high-performance web and
//           mobile applications for visionary companies worldwide.
//         </p>

//         <div className="hero-buttons">

//           <button className="primary-btn">
//             View Our Work →
//           </button>

//           <button className="secondary-btn">
//             Start a Project
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;    

import React from "react";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">PREMIUM DIGITAL ENGINEERING</p>

        <h1 className="hero-title">
          Engineering the Future <br />
          of Digital Products
        </h1>

        <p className="hero-description">
          We design, develop, and deploy scalable, high-performance web and
          mobile applications for visionary companies worldwide.
        </p>

        <div className="hero-buttons">
          {/* Linked to Portfolio Section */}
          <a href="#portfolio" className="hero-btn-link">
            <button className="primary-btn">View Our Work →</button>
          </a>

          {/* Linked to Contact Form Section */}
          <a href="#contact" className="hero-btn-link">
            <button className="secondary-btn">Start a Project</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;