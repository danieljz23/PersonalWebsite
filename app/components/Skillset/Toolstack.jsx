"use client";

import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiArduino,
  SiAutodesk
} from "react-icons/si";
import { GiSolderingIron } from "react-icons/gi"; // Best match for soldering
import { SiSupabase } from "react-icons/si";

const tools = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiArduino />, name: "Arduino IDE" },
  { icon: <SiAutodesk />, name: "Autodesk Fusion 360" },
  { icon: <GiSolderingIron />, name: "Soldering" }
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip style={{opacity: 1}}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;
