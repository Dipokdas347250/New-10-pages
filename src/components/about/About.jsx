import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./about.css"

const About = () => {
  return (
    <Container >
        <div className="about_part">
        <Row>
              <Col lg={{ span: 5, offset: 1 }}>
                  <div className="about_text">
                      <h3>Our Feature</h3>
                      <h2>Receive payments
                          quickly from anywhere</h2>
                      <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                  </div>

              </Col>
              <Col lg={{ span: 4, offset: 1 }}>
                  <div className="about_from">
                      <h3>Get Started for Free</h3>
                      <form action="">
                        <input className='one' type="text"  placeholder='Email Address' />
                        <input className='two' type="Password" placeholder='Password' />
                        
                        
                      </form>
                      <p>Get Started</p>
                  </div>

              </Col>

        </Row>
        </div>
        
    </Container>
    
  )
}

export default About
