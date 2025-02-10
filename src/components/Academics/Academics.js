import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Academics.css"; 

const academicsData = [
  {
    title: "Bachelor of Technology",
    duration: "2024 - Present",
    cgpa: "In Progress",
    details: ["Computer Science and Technology", "Specialization in AI & ML"],
    university: "Presidency University, Bengaluru",
    logo: "/images/presidency_logo.png", // Update with actual image paths
  },
  {
    title: "Pre-University College",
    duration: "2021 - 2024",
    cgpa: "8.5",
    details: ["Physics, Maths, Chemistry, Computer Science", "Pre-University Completion"],
    university: "MES Kishora Kendra, Bengaluru",
    logo: "/images/mes_logo.png",
  },
  {
    title: "Secondary High School",
    duration: "2019 - 2021",
    cgpa: "9.09",
    details: ["Based on NCERT", "Secondary Education Completion"],
    university: "Nelamangala, Bengaluru",
    logo: "/images/ncert_logo.png",
  },
];

const Academics = () => {
  return (
    <div className="academics-container">
      <h2 className="section-title">Academic Journey</h2>

      <VerticalTimeline>
        {academicsData.map((academic, index) => (
          <VerticalTimelineElement
            key={index}
            date={academic.duration}
            icon={<img src={academic.logo} alt="university-logo" className="timeline-logo" />}
            contentStyle={{ background: "#1e1e2f", color: "#fff", borderRadius: "10px" }}
            contentArrowStyle={{ borderRight: "7px solid #6c63ff" }}
          >
            <h3 className="vertical-timeline-element-title">{academic.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{academic.university}</h4>
            <p>🎓 <strong>CGPA:</strong> {academic.cgpa}</p>
            <ul>
              {academic.details.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Academics;
