import React from "react";

function Services() {
  const services = [
    { title: "Search Engine Optimization", icon: "🔍" },
    { title: "Pay-Per-Click Advertising", icon: "💰" },
    { title: "Social Media Marketing", icon: "📱" },
    { title: "Email Marketing", icon: "✉️" },
    { title: "Content Creation", icon: "✍️" },
    { title: "Analytics and Tracking", icon: "📊" },
  ];

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>Learn more</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
