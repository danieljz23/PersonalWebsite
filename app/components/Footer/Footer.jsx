import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import logo from "../../../public/assets/SelfLogo.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <Image src={logo} alt="brand" className="img-fluid logobottom" />
          <span>Daniel | Engineer & Developer</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <Link href="/contact">
            <span style={{ textDecoration: "underline", color: "white" }}>
              Contact Me!
            </span>
          </Link>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/danieljz23"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
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
                className="icon-colour home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:daniel.jieru.zhou@gmail.com"
                className="icon-colour home-social-icons"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
