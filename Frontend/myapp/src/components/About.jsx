import React from "react";
import "../App.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* 🖼️ Left Side Image */}
        <div className="about-image">
          <img
            src="./src/Images/about2.jpg"
            alt="About Us"
          />
        </div>

        {/* 📝 Right Side Content */}
        <div className="about-content">
          <h2>About <span className="highlight">TechBlog</span></h2>
          <p>
            Welcome to <b>TechBlog</b> — your trusted source for technology insights, 
            web development tutorials, and the latest innovations in the digital world. 
            We are a passionate team of tech enthusiasts who love sharing knowledge 
            and inspiring others to grow in the tech industry.
          </p>
          <p>
            Our goal is to simplify complex topics, provide quality content, and 
            create a community where learning never stops. Whether you’re a student, 
            developer, or entrepreneur — TechBlog is here to keep you updated and motivated.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
