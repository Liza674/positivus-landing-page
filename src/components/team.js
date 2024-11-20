import React from "react";


function Team() {
  const teamMembers = [
    { name: "John Doe", role: "SEO Specialist" },
    { name: "Jane Smith", role: "Content Creator" },
    { name: "Alice Johnson", role: "Marketing Analyst" },
  ];

  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
