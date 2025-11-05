import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span className="highlight">TechBlog</span></h1>
        <p>
          Discover articles, tutorials, and insights about the latest trends in
          technology, coding, and innovation — all in one place.
        </p>
        <button className="hero-btn">Read Latest Posts</button>
      </div>
      <div className="hero-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="Technology illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
