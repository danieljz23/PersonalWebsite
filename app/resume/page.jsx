"use client";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

const resumeLink = "/assets/DanielResume.pdf"; 
const resumeImage = "/assets/DanielResume.jpg";

const Resume = () => {
  const [isClient, setIsClient] = useState(false); // Check if it's client-side
  const [width, setWidth] = useState(850);         // Default width for SSR

  useEffect(() => {
    setIsClient(true); // Mark as client after hydration

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "60px", marginBottom: "50px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "300px", fontSize: "1.2em", padding: "10px 20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          {isClient && ( // Render only after hydration
            <div
              style={{
                position: "relative",
                width: width > 786 ? "80vw" : "95vw", 
                maxWidth: "1000px",
                margin: "auto",
                aspectRatio: "8.5 / 11",
              }}
            >
              <Image
                src={resumeImage}
                alt="Resume"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px", marginBottom: "50px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "300px", fontSize: "1.2em", padding: "10px 20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
