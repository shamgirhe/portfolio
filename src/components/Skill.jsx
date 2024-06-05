import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import FrameWrapper from "./FrameWrapper";

const skills = [
  { name: "JavaScript", proficiency: 80 },
  { name: "React", proficiency: 70 },
  { name: "Java", proficiency: 80 },
  { name: "Node.js", proficiency: 75 },
  { name: "HTML/CSS", proficiency: 70 },
];

const Skills = () => {
  return (
    <>
      <Container id="skills" className="my-5">
        <h2>Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar
                now={skill.proficiency}
                label={`${skill.proficiency}%`}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <FrameWrapper />
    </>
  );
};

export default Skills;
