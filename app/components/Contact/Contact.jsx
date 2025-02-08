"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let mounted = true;

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      if (mounted) {
        setNotDone(true);
      }
    } else {
      emailjs
        .sendForm(
          "service_uowwabt",
          "template_d1n5mbq",
          form.current,
          "B1yPO6JoDGYfbZ2oI"
        )
        .then(
          (result) => {
            if (mounted) {
              setDone(true);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    return () => {
      mounted = false;
    };
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row
        className="extra-space items-center justify-center"
        style={{ marginTop: "100px" }}
      >
        <Col
          md={6}
          className="c-left"
          style={{
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "3em" }}>Get in Touch</h1>
          <h1 style={{ fontSize: "3em" }} className="yellow">
            Contact me
          </h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>
            <Button
              type="submit"
              className="button"
              style={{ fontSize: "1.3em", padding: "10px 30px" }}
              disabled={done}
            >
              Send
            </Button>
            <span className="done">
              {done &&
                "Thank you for contacting me! I will get back to you as soon as I can."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
