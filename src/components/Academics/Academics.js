import React from "react";
import "./Academics.css";

const academicsData = [
  {
    title: "Bachelor's Technology",
    duration: "2024 - Present",
    cgpa: "In Progress",
    details: ["Computer Science and Technology", "Splz. under AI and Ml"],
    university: "Presidency University, Bengaluru",
  },
  {
    title: "Pre-University College",
    duration: "2021 - 2024",
    cgpa: "8.5",
    details: ["Physics, Maths, Chemistry, Computer Science", "Pre-University Completion"],
    university: "MES Kishora Kendra, Bengaluru",
  },
  {
    title: "Secondary High School",
    duration: "2019 - 2021",
    cgpa: "9.09",
    details: ["Based on NCERT", "Secondary Education Completion"],
    university: "Nelamangala, Bengaluru",
  },
];

const Academics = () => {
  return (
    <div className="academics-container">
      <h2 className="section-title">Academic Journey</h2>
      <p className="section-subtitle">A chronicle of learning, growth, and academic exploration</p>

      {academicsData.map((academic, index) => (
        <div key={index} className="academic-card">
          <h3>{academic.title}</h3>
          <p>📅 {academic.duration}</p>
          <p>🎓 <strong>CGPA:</strong> {academic.cgpa}</p>  
          <ul>
            {academic.details.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
          <em>{academic.university}</em>
        </div>
      ))}
    </div>
  );
};

export default Academics;
