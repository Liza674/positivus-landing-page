import React from 'react';

const Services = () => {
  const services = [
    { title: 'SEO Optimization', description: 'Boost your rankings on Google.' },
    { title: 'PPC Campaigns', description: 'Increase traffic with paid ads.' },
    { title: 'Content Creation', description: 'Engaging content for your brand.' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
