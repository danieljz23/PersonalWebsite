"use client";

import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  DiJavascript1,
  DiCss3,
  DiJava,
  DiPython,
} from "react-icons/di";
import { SiHtml5, SiCplusplus, SiCircuitverse } from "react-icons/si"; // Updated import
import { GiCircuitry } from "react-icons/gi"; // New import

const techs = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <DiCss3 />, name: "CSS" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPython />, name: "Python" },
  { icon: <SiCircuitverse />, name: "Electronic Schematic" }, // Shortened name
  { icon: <GiCircuitry />, name: "PCB Design" },
  { icon: <SiKotlin />, name: "Kotlin" }
];

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip style={{ opacity: 1 }}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
