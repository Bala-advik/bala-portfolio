import * as React from "react";
import "../styles/about.css";

const About: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-center-text">
          <h1>
            Hey, I'm Bala <span className="wave-icon">👋</span>
          </h1>
          <p>
            <span>
              A dedicated full-stack developer with a passion for crafting
              innovative and user-centric web applications.
            </span>
          </p>
          <p>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <div className="portfolio-image">
          <img
            className="portfolio-image-desktop"
            height={500}
            src="./myself.png"
            alt="portfolio-desk-image"
          />

          <div className="rounded-wrapper">
            <div className="rounded-glow"></div>
            <img
              className="portfolio-image-mobile"
              height={500}
              src="./myself-12.png"
              alt="portfolio-mobile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
