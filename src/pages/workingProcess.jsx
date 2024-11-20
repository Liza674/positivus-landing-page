import React from "react";


function Process() {
  const steps = [
    "Consultation",
    "Research and Strategy Development",
    "Implementation",
    "Monitoring and Optimization",
    "Reporting and Communication",
    "Continual Improvement",
  ];

  return (
    <section className="process">
      <h2>Our Working Process</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            <span>Step {index + 1}:</span> {step}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Process;
