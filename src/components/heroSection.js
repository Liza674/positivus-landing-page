import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Elevate Your Digital Success</h1>
          <p>
            Discover tailored strategies and cutting-edge solutions for your
            business growth. We transform ideas into impactful realities.
          </p>
          <a href="#services" className="btn btn-primary">
            Get Started
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/assets/hero-image.png"
            alt="Hero illustration"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
