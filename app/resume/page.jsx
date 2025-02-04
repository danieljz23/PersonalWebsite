"use client";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

// import pdf from "../../public/assets/DanielResume.pdf"

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.js`;

const resumeLink = "/assets/DanielResume.pdf"; 
const resumeImage = "/assets/DanielResume.jpg";

const Resume = () => {
  const [width, setWidth] = useState(300); // Adjusted initial width

  useEffect(() => {
    setWidth(window.innerWidth);
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
          <div style={{ 
            position: 'relative',
            width: width > 786 ? '80%' : '100%',
            margin: 'auto',
            aspectRatio: '8.5 / 11'  // Standard US letter size ratio
          }}>
            <Image
              src={resumeImage}
              alt="Resume"
              fill
              priority
              style={{ 
                objectFit: 'contain'
              }}
            />
          </div>
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
  )
}

export default Resume