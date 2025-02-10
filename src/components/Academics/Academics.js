import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";
import "./Academics.css"; // Ensure this CSS file exists

const academicsData = [
  {
    title: "Bachelor's Transfer Program",
    location: "Berlin, Germany",
    date: "2024 - Present",
    gpa: "In Progress",
    details: [
      "International Academic Transfer",
      "Continuing Advanced Studies",
    ],
    university: "IU University, Berlin",
  },
  {
    title: "Bachelor's Initial Program",
    location: "Bangalore, India",
    date: "2021 - 2024",
    gpa: "8.1/10",
    details: [
      "Completed Initial Coursework",
      "Academic Credit Transfer Preparation",
    ],
    university: "Presidency University, Bangalore",
  },
  {
    title: "High School Diploma",
    location: "Kathmandu, Nepal",
    date: "2019 - 2021",
    gpa: "3.36/4.0",
    details: [
      "Physics, Chemistry, Maths and Computer Science",
      "Secondary Education Completion",
    ],
    university: "KV Kathmandu",
  },
];

const Academics = () => {
  return (
    <div className="academics-container">
      <h2 className="academics-title">
        <span className="gradient-text">Academic Journey</span>
      </h2>
      <p className="academics-subtitle">
        A chronicle of learning, growth, and academic exploration
      </p>

      <div className="academics-grid">
        {academicsData.map((item, index) => (
          <div key={index} className="academic-card">
            <h3 className="academic-title">{item.title}</h3>
            <p className="academic-location">
              <FaMapMarkerAlt className="icon" /> {item.location}
            </p>
            <p className="academic-date">
              <FaCalendarAlt className="icon" /> {item.date}
            </p>
            <p className="academic-gpa">
              <FaAward className="icon" /> <strong>GPA:</strong> {item.gpa}
            </p>
            <ul className="academic-details">
              {item.details.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>
            <p className="academic-university"><em>{item.university}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
