import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oralcancer from "../../Assets/Projects/oralcancer.png";
import paddle from "../../Assets/Projects/paddle.png";
import objecttrack from "../../Assets/Projects/objecttrack.png";
import fraud_Detection from "../../Assets/Projects/fraud_Detection.png";
import ccfraud from "../../Assets/Projects/ccfraud.png";
import LMmodel from "../../Assets/Projects/LMmodel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud_Detection}
              isBlog={false}
              title="Income_Tax_Fraud_Detection"
              description="Developed a system to detect fraudulent activities in income tax filings using AI and machine learning techniques. Implemented data preprocessing, feature engineering, and trained models to identify anomalies and suspicious patterns."
              ghLink="https://github.com/oxBinaryBrain/An_Income_Tax_Fraud_Detection_Using_AI-ML"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMmodel}
              isBlog={false}
              title="Multilingual Chatbot "
              description="The multilingual_chatbot function detects the language of the user's input, translates it to English (if necessary), generates a response in English, and then translates the response back to the user's original language."
              ghLink="https://github.com/oxBinaryBrain/Multilingual_chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objecttrack}
              isBlog={false}
              title="Object Tracking using OpenCV and KCF Tracker"
              description="Object tracking is the process of locating a moving object (or multiple objects) over time in a video stream. This project utilizes the KCF algorithm, which is a robust and efficient method for tracking objects in video sequences."
              ghLink="https://github.com/oxBinaryBrain/Object_Tracking"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oralcancer}
              isBlog={false}
              title="Oral Cancer Detection using Neural Networks"
              description="Developing a machine learning model to detect and classify oral cancer levels from images. It involves data collection, preprocessing, feature extraction, selection, and model building using techniques like CNNs."
              ghLink="https://github.com/oxBinaryBrain/Oral_Cancer_Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccfraud}
              isBlog={false}
              title="CC_Fraud_Detection"
              description="This is a simple machine learning model which analyzes whether a credit card transaction is fraudlent or not. The dataset is downloaded from kaggle, check the readme for link to dataset."
              ghLink="https://github.com/oxBinaryBrain/CC-Fraud-Detection"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=xoxo" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paddle}
              isBlog={false}
              title="Paddle Detection"
              description="Object Detection toolkit based on PaddlePaddle. It supports object detection, instance segmentation, multiple object tracking and real-time multi-person keypoint detection."
              ghLink="https://github.com/oxBinaryBrain/PaddleDetection"
              // demoLink="https://xoxo.com"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
