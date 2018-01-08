import React, { Component } from "react";
import "./resources.css";
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';

const Resources = () => (
  <div>
    <Row>
      <Col size="lg-12">
        <Nav />
      </Col>
    </Row>
    <Container>
      <Row>
        <Col size="lg-4">
          <div className="card">
            <img className="card-img-top" src="img/lungs.jpg" alt="lungs" />
            <div className="card-body">
              <h5 className="card-title">Benefits of Deep Breathing</h5> 
              <a data-toggle="collapse" href="#collapseBreathe" aria-expanded="false">
                <span class="oi oi-ellipses"/>
              </a>
              <div className="collapse" id="collapseBreathe">
                <h6 className="card-title">The Calming Response (Parasympathetic Response)</h6>
                <ul>
                  <li>oxygen consumption decreases</li>
                  <li>breathing slows</li>
                  <li>heart rate slows</li>
                  <li>blood pressure decreases</li>
                  <li>muscle tension decreases</li>
                  <li>growing sense of ease in body, calmness in mind</li>
                </ul>
                <a className="externalResource" href="https://my.clevelandclinic.org/health/articles/9445-diaphragmatic-breathing" target="_blank">Learn more</a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="card">
            <img className="card-img-top" src="img/heart.jpg" alt="heart" />
            <div className="card-body">
              <h5 className="card-title">Benefits of Tracking Moods</h5>
              <a data-toggle="collapse" href="#collapseMoods" aria-expanded="false">
                <span class="oi oi-ellipses" />
              </a>
              <div className="collapse" id="collapseMoods">
                <ul>
                  <li>It allows you to connect your feelings to what happened during the day.</li>
                  <li>Mood charts can help your physician, therapist, or psychiatrist give you a more accurate diagnosis.</li>
                  <li>Charting your mood allows you to see patterns in your life.</li>
                  <li>It allows you to better understand your triggers.</li>
                  <li>Keeping track of your moods can tell you a lot about the timing of your different mood states.</li>
                </ul> 
                <a className="externalResource" href="https://blogs.psychcentral.com/coping-depression/2017/04/the-benefits-of-journaling-for-anxiety/" target="_blank">Learn more</a>
              </div>

            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="card">
            <img className="card-img-top" src="img/brain.jpg" alt="brain" />
            <div className="card-body">
              <h5 className="card-title">Benefits of Blogging</h5>
              <a data-toggle="collapse" href="#collapseBlog" aria-expanded="false">
                <span class="oi oi-ellipses" />
              </a>
              <div className="collapse" id="collapseBlog">
                <h6 className="card-title">The Calming Response (Parasympathetic Response)</h6>
                <p>To work with our thoughts and make them more adaptive and realistic, we first need to know what they are. We can't allow our self-talk to remain background music, affecting us without knowing it.</p>
                <p>One of the most useful things you can do to combat stress and anxiety is keep a running record of your thoughts on paper. There's simply no better way to learn about your thought processes than to write them down.</p>
                <a className="externalResource" href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1" target="_blank">Learn more</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Additional Resources</h4>
              <Row>
                <Col size="lg-3">
                  <a className="card-text" href="https://adaa.org/" target="_blank" rel="noopener noreferrer"><img src="img/ADAA.jpg" class="rounded" alt="ADAA"/></a>
                </Col>    
                <Col size="lg-3">
                  <a className="card-text" href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer"><img src="img/suicide.jpg" class="rounded" alt="Suicide Prevention" /></a>
                </Col>  
                <Col size="lg-3">
                  <a className="card-text" href="https://www.healthyplace.com/blogs/category/anxiety-schmanxiety/" target="_blank" rel="noopener noreferrer"><img src="img/healthyPlace.jpg" class="rounded" alt="Anxiety Schmanxiety" /></a>
                </Col> 
                <Col size="lg-3">
                  <a className="card-text" href="https://anxietydepressionassoc.site-ym.com/?page=FATMain" target="_blank" rel="noopener noreferrer"><img src="img/therapist.png" class="rounded" alt="Therapist" /></a>
                </Col> 
                {/* <Col size="lg-2">
                </Col> 
                <Col size="lg-2">
                </Col>         
              <a className="card-text" href="https://www.nami.org/" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a>
              <a className="card-text" href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">Psychology Today</a> */}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Resources;