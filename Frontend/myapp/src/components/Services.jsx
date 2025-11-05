import React from "react";
import "../App.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We provide high-quality digital solutions to help your business grow.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721269.png"
              alt="Web Design"
            />
            <h3>Web Design</h3>
            <p>
              Clean, modern, and user-friendly website designs that create
              lasting impressions.
            </p>
          </div>

          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
              alt="Frontend Development"
            />
            <h3>Frontend Development</h3>
            <p>
              Responsive, fast, and dynamic interfaces using HTML, CSS, and
              React.js.
            </p>
          </div>

          <div className="service-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Content Writing"
            />
            <h3>Content Writing</h3>
            <p>
              Engaging and SEO-friendly content for blogs, portfolios, and
              business websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
