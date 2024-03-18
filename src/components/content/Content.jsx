import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import card from "../../assets/Cards.png"
import "./content.css"

const Content = () => {
  return (
    <section id='content' >
        <Container>
            <Row>
                <Col lg={5}>
                      <div className="content_text">
                          <h3>Our Feature</h3>
                          <h2>Receive payments
                              quickly from anywhere</h2>
                          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                          <a href="#">Get Started</a>

                      </div>
                </Col>
                <Col lg={{span:6,offset:1}}>
                    <div className="content_img">
                        <img src={card} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Content
