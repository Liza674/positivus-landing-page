import React from "react";


function CaseStudies() {
  const caseStudies = [
    "For local businesses, we implemented a regional SEO strategy...",
    "For a B2B software company, we developed a unique content plan...",
    "For an e-commerce store, we created a targeted PPC campaign...",
  ];

  return (
    <section className="case-studies">
      <h2>Case Studies</h2>
      <ul>
        {caseStudies.map((study, index) => (
          <li key={index}>{study}</li>
        ))}
      </ul>
    </section>
  );
}

export default CaseStudies;
