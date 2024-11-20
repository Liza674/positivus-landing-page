import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            through a range of services including SEO, PPC, and content
            creation.
          </p>
          <a href="#services" className="btn btn-primary">Book a Consultation</a>
        </div>
        <div className="hero-image">
          <img
            src="megaphone-illustration.png"
            alt="Megaphone Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
