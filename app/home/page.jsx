"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import selfie from "../../public/assets/SelfieFade.png";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import dynamic from "next/dynamic";
import Head from "next/head";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });



const Home = () => {
  return (
    <section>
      <Container
        fluid
        className="home-section lighter-background geometric-bg"
        id="home"
      >
        <div className="circle-3"></div>
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header justify-center mr-8">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Daniel Zhou</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              className="justify-center"
            >
              <Tilt>
                <Image
                  src={selfie}
                  alt="self pic"
                  className="img-fluid fade-to-black"
                  style={{ maxWidth: "100%", height: "auto" }}
                  priority
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;
