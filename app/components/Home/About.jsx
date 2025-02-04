"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../../public/assets/CSStudent.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a{" "}
              <span className="yellow">
                dynamic and results-driven engineer
              </span>{" "}
              with expertise in
              <b className="yellow"> C++ programming, web development, </b> and
              <b className="yellow"> electrical systems integration.</b> My work
              spans
              <b className="yellow"> PCB design & assembly, </b> custom
              libraries for components like the
              <b className="yellow"> ADS8688 ADC, </b> and application
              development using
              <b className="yellow"> React/Next.js and MongoDB.</b>
              <br />
              <br />
              With a strong background in
              <b className="yellow"> software and hardware, </b> I build
              <i>
                <b className="yellow"> user-focused solutions </b>
              </i>
              that drive innovation and efficiency. I thrive on challenges,
              value
              <b className="yellow"> collaboration, </b> and continuously seek
              to expand my skill set.
              <br />
              <br />
              Passionate about impactful projects, I aim to contribute to teams
              pushing
              <b className="yellow"> technological boundaries </b> while
              fostering a<b className="yellow"> positive work environment.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <Link href='/contact'>
                <span className="yellow underline">connect.</span>
              </Link>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SquireDuck"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daniel-jieru-zhou/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
