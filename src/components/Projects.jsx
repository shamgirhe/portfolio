import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link}>View Project</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
