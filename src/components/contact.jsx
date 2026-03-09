import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-container">

        <p className="contact-subtitle">GET IN TOUCH</p>

        <h2 className="contact-title">
          Let’s Build Something Exceptional
        </h2>

        <p className="contact-desc">
          Ready to elevate your digital presence? Tell us about your project
          and let's create something remarkable together.
        </p>

        <div className="contact-grid">

          {/* FORM */}
          <form className="contact-form">

            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />

            <label>Email Address</label>
            <input type="email" placeholder="john@company.com" />

            <label>Project Details</label>
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="contact-info">

            <div className="info-card">
              <h4>Email Us</h4>
              <p>hello@yugamai.com</p>
            </div>

            <div className="info-card">
              <h4>Based In</h4>
              <p>San Francisco, CA · Remote Worldwide</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;