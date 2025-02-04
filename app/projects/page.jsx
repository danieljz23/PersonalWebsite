"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import MarbleMadness from "../../public/assets/projects/MarbleMadness.jpg";
import BruinMovies from "../../public/assets/projects/BruinMovie.jpg";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      imgPath: BruinMovies,
      isBlog: false,
      title: "BruinMovies",
      description: "Bruin Movie is a social app designed to strengthen student connections through shared movie experiences. The app will allow users to explore a list of films in near-by theaters and connect with other students with similar movie tastes to form watch parties.",
      ghLink: "https://github.com/SquireDuck/BruinMovies",
    },
    {
      imgPath: MarbleMadness,
      isBlog: false,
      title: "MarbleMadness",
      description: "Marble Madness is an action-packed puzzle game where you control a marble to navigate challenging levels. Your objectives include pushing marbles to fill holes, collecting gems to unlock new stages, dodging enemy bullets, and shooting back to defeat foes. Along the way, you'll gain power-ups to enhance your abilities.",
      ghLink: "https://github.com/SquireDuck/MarbleGame"
    }
    // ...other projects...
  ];

  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh"}}>
      <Container className="items-center">
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))
          ) : (
            <p className="text-center" style={{ color: "orange", fontSize: "96px", marginTop: "2em"}}>Projects coming soon!</p>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;