import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // ✅ Corrected import
import "./Academics.css"; 

const academicsData = [
  {
    title: "Bachelor of Technology",
    duration: "2021 - Present",
    cgpa: "In Progress",
    details: ["Computer Science and Technology", "Specialization in AI & ML"],
    university: "Presidency University, Bengaluru",
  },
  {
    title: "Pre-University College",
    duration: "2019 - 2021",
    cgpa: "8.5",
    details: ["Physics, Maths, Chemistry, Computer Science", "Pre-University Completion"],
    university: "MES Kishora Kendra, Bengaluru",
  },
  {
    title: "Secondary High School",
    duration: "2012 - 2019",
    cgpa: "9.09",
    details: ["Based on NCERT", "Secondary Education Completion"],
    university: "Nelamangala, Bengaluru",
  },
];

const particlesInit = async (engine) => {
  await loadFull(engine); 
};

const Academics = () => {
  return (
    <div className="academics-container">
      {/* Particles Background */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          background: { color: "#000000" },
        }}
      />

      <h2 className="section-title">Academic Journey</h2>

      <VerticalTimeline>
        {academicsData.map((academic, index) => (
          <VerticalTimelineElement
            key={index}
            date={academic.duration}
            contentStyle={{ background: "#1e1e2f", color: "#fff", borderRadius: "10px" }}
            contentArrowStyle={{ borderRight: "7px solid #6c63ff" }}
            iconStyle={{ background: "#6c63ff", color: "#fff" }}
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
