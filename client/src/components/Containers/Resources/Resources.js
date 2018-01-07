import React, { Component } from "react";
import "./resources.css";
import Nav from '../../Nav';
import Article from '../../Article';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';

// Require all models
// const db = require("./models");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

const Resources = () => (
      <div>
        <Row>
          <Col size="lg-12">
            <Nav />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col size="lg-3">
              <div className="card">
                <div className="card-body">
                  <a data-toggle="collapse" href="#collapseExample" aria-expanded="false">
                    <h4 className="card-title">You are Not Alone</h4>
                  </a>
                  <div className="collapse" id="collapseExample">
                    <p className="card-text">Anxiety disorders are the most common mental illness in the U.S., affecting 40 million adults in the United States age 18 and older, or 18.1% of the population every year.</p>
                    <p className="card-text">Anxiety disorders are highly treatable, yet only 36.9% of those suffering receive treatment.</p>
                    <p className="card-text">It's not uncommon for someone with an anxiety disorder to also suffer from depression or vice versa. Nearly one-half of those diagnosed with depression are also diagnosed with an anxiety disorder.</p>
                </div>
                </div>
              </div>
            </Col>
            <Col size="lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Articles by People Like You</h4>
                  <Article />
                </div>
              </div>
            </Col>
            <Col size="lg-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Resources</h4>
                  <p><a className="card-text" href="https://adaa.org/" target="_blank" rel="noopener noreferrer">Anxiety and Depression Association of America</a></p>
                  <p><a className="card-text" href="https://www.nami.org/" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></p>
                  <p><a className="card-text" href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer">National Suicide Prevention Lifeline</a></p>
                  <p><a className="card-text" href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">Psychology Today</a></p>
                  <p><a className="card-text" href="https://therapists.psychologytoday.com/rms/" target="_blank" rel="noopener noreferrer">Find a Therapist</a></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
);

export default Resources;