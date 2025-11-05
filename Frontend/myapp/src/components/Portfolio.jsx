import React from "react";
import "../App.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Projects</h2>
      <p className="portfolio-subtitle">
        Here are some of the awesome projects we’ve worked on recently.
      </p>

      <div className="portfolio-container">
        <div className="portfolio-card">
          <img src="./src/Images/WDF.jpeg" alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            We build fast, modern, and responsive websites using the latest
            technologies to deliver the best user experience.
          </p>
        </div>

        <div className="portfolio-card">
          <img src="./src/Images/UI3.jpeg" alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>
            Our creative team designs beautiful and user-friendly interfaces
            that make your product stand out.
          </p>
        </div>

        <div className="portfolio-card">
          <img src="./src/Images/SEO1.jpeg" alt="SEO Optimization" />
          <h3>SEO Optimization</h3>
          <p>
            We help your website rank higher on Google with our proven SEO
            strategies and keyword research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
