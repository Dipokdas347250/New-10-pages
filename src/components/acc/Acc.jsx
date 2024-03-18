import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from "../../assets/Group02.png"
import "./acc.css"

const Acc = () => {
  return (
    <section id='acc'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className="acc_text">
                <h3>Our Feature</h3>
                          <h2>All payments are
                              linked to your Financy
                              account</h2>
                          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                          <a href="#">Get Started</a>
                </div>
                
                </Col>
                <Col lg={{span:6,offset:1}}>
                <div className="acc_img">
                    <img src={group} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Acc
