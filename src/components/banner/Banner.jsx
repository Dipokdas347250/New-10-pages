import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/banner.png/"
import "./banner.css"

const Banner = () => {
  return (
    <div>
     <section id='banner'>
     <Container >
        <Row>
            <Col lg={6}>
                <div className="banner_text">
                    <h1>Managing business payments has never been easier</h1>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <a href="#">Get Started</a>
                    
                </div>
            </Col>
            <Col lg={6}>
                <div className="banner_img">
                <img src={banner} alt="" />
                </div>
            </Col>
        </Row>
     </Container>
     </section>
    </div>
  )
}

export default Banner
