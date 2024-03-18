import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ua.css"
import one from "../../assets/one.png"

const Us = () => {
  return (
    <section id='us'>
        <Container>
            <div className="us_part">
            <Row>
                <Col>
                <div className="us_text">
                    <h4>Why Financy</h4>
                    <h2>Why Choose Us</h2>
                </div>
                
                </Col>
            </Row>
            <Row>
                <Col lg={{span:5,offset:1}}>
                 <div className="us_item">
                    <img src={one} alt="" />
                    <h4>No Extra Fee</h4>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                 </div>
                </Col>
                <Col lg={5}>
                 <div className="us_item">
                    <img src={one} alt="" />
                    <h4>No Extra Fee</h4>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:5,offset:1}}>
                 <div className="us_item">
                    <img src={one} alt="" />
                    <h4>No Extra Fee</h4>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                 </div>
                </Col>
                <Col lg={5}>
                 <div className="us_item">
                    <img src={one} alt="" />
                    <h4>No Extra Fee</h4>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                 </div>
                </Col>
            </Row>
            </div>
        </Container>
    </section>
  )
}

export default Us
