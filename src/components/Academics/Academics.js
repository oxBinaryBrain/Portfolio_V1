import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaMedal, FaCertificate } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Technology",
    duration: "2021 - Present",
    cgpa: "In Progress",
    details: [
      "Computer Science and Technology",
      "Specialization in AI & ML",
      "Key courses: Data Structures, Algorithms, Machine Learning",
      "Research Projects in AI/ML"
    ],
    university: "Presidency University, Bengaluru",
    icon: <FaGraduationCap />,
    iconBackground: "#6c63ff"
  },
  {
    title: "Pre-University College",
    duration: "2019 - 2021",
    cgpa: "8.5",
    details: [
      "Physics, Maths, Chemistry, Computer Science",
      "Pre-University Completion",
      "Advanced Mathematics and Computer Science"
    ],
    university: "MES Kishora Kendra, Bengaluru",
    icon: <FaCertificate />,
    iconBackground: "#4a90e2"
  },
  {
    title: "Secondary High School",
    duration: "2012 - 2019",
    cgpa: "9.09",
    details: [
      "Based on NCERT",
      "Secondary Education Completion",
      "Strong foundation in Sciences"
    ],
    university: "Nelamangala, Bengaluru",
    icon: <FaMedal />,
    iconBackground: "#50c878"
  }
];

function Academics() {
  return (
    <div className="academic-page">
      <Particle />
      <Container fluid className="academics-container">
        <div className="academics-content">
          <h1 className="section-title">
            My <strong className="purple">Academic Journey</strong>
          </h1>
          
          <VerticalTimeline animate={true} lineColor="#6c63ff">
            {academicsData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: "rgba(33, 33, 33, 0.9)",
                  color: "#fff",
                  border: "1px solid rgba(108, 99, 255, 0.2)"
                }}
                contentArrowStyle={{ borderRight: "7px solid rgba(33, 33, 33, 0.9)" }}
                date={item.duration}
                dateClassName="timeline-date"
                iconStyle={{ background: item.iconBackground, color: "#fff" }}
                icon={item.icon}
              >
                <div className="timeline-content">
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.university}</h4>
                  <div className="cgpa-badge">
                    CGPA: {item.cgpa}
                  </div>
                  
                  <div className="details-section">
                    <h5>Course Details</h5>
                    <ul>
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
}

export default Academics;
