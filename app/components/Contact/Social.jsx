import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"; // Added AiOutlineMail
import { FaLinkedinIn } from "react-icons/fa";
import "../../styles/Socials.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col
          md={12}
          className="contact-social"
          style={{ justifyItems: "center", alignContent: "center" }}
        >
          <div className="contact-text">
            <h1 style={{ fontWeight: "normal", fontSize: "1.4em"}}>FIND ME ON</h1>
            <p style={{ fontSize: "0.6em" }}> 
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links" style={{ justifyContent: "center" }}>
            <li className="contact-icons">
              <a
                href="https://github.com/SquireDuck"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/daniel-jieru-zhou/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="mailto:daniel.jieru.zhou@gmail.com" // Replace with your email address
                className="icon-color  contact-social-icons"
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

export default Social;
