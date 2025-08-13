"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import MarbleMadness from "../../public/assets/projects/MarbleMadness.jpg";
import BruinMovies from "../../public/assets/projects/BruinMovie.jpg";
import ProjectShowcase from "../../public/assets/projects/ProjectShowcase.jpg";
import TicketApp from "../../public/assets/projects/TicketApp.jpg";
import RocketProject from "../../public/assets/projects/RocketProject.jpg";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      imgPath: BruinMovies,
      isBlog: false,
      title: "BruinMovies",
      description:
        "Bruin Movie is a social app designed to strengthen student connections through shared movie experiences. The app will allow users to explore a list of films in near-by theaters and connect with other students with similar movie tastes to form watch parties.",
      ghLink: "https://github.com/danieljz23/BruinMovies",
    },
    {
      imgPath: MarbleMadness,
      isBlog: false,
      title: "MarbleMadness",
      description:
        "Marble Madness is an action-packed puzzle game where you control a marble to navigate challenging levels. Your objectives include pushing marbles to fill holes, collecting gems to unlock new stages, dodging enemy bullets, and shooting back to defeat foes. Along the way, you'll gain power-ups to enhance your abilities.",
      ghLink: "https://github.com/danieljz23/MarbleGame",
    },
    {
      imgPath: ProjectShowcase,
      isBlog: false,
      title: "ProjectShowcase",
      description:
        "A simple project showcase webpage using Firebase for authentication and database storage. Users can sign in with Google, create project showcases, and delete them. The project is not fully flushed out yet, but the core functionality is in place.",
      ghLink: "https://github.com/danieljz23/project-showcase",
    },
    {
      imgPath: TicketApp,
      isBlog: false,
      title: "TicketApp",
      description:
        "A simple ticket management application where users can create tickets for software, hardware, and project issues or jobs. Tickets can be assigned priorities, edited, and managed efficiently. The project is not fully flushed out yet, but the core functionality is in place.",
      ghLink: "https://github.com/danieljz23/ticket-app",
    },
    {
      imgPath: RocketProject,
      isBlog: false,
      title: "Rocket Project",
      description:
        "Led EGSE and Controls across Prometheus and Ares. Built ground control/data systems, created Prometheus’s first wireless comms, and helped design and integrate Ares’s throttling (controlled mass flow valve). Drove cross-team hardware/software integration, closed-loop control (PID), and reliable testing.",
      ghLink: "", // no public repo
    },
    {
      imgPath: Leechy,
      isBlog: false,
      title: "Leechy",
      description:
        "Android rental marketplace app built from scratch with Jetpack Compose and MVVM. Features advanced Mapbox-based search with clustering, multi-step listing creation, offline-first API integration, and optimized performance for a startup-scale user base.",
      websiteLink: "https://www.leechy.app/",
    },
  ];

  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
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
                  websiteLink={project.websiteLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))
          ) : (
            <p
              className="text-center"
              style={{ color: "orange", fontSize: "96px", marginTop: "2em" }}
            >
              Projects coming soon!
            </p>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
