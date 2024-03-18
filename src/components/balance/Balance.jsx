import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import bal from "../../assets/bal.png"
import "./balance.css"


const Balance = () => {
  return (
    
      <Container  id='balance'>
      <Row>

        <Col lg={6} >
          <div className="bal_img">
            <img src={bal} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="bal_text">
            <h3>Our Feature</h3>
            <h2>Receive payments
              quickly from anywhere</h2>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <a href="#">Get Started</a>

          </div>
        </Col>

      </Row>
            

      </Container>
    
  )
}

export default Balance
