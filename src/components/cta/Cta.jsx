import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./cta.css"

const Cta = () => {
  return (
    <section id='cta'>
        <Container>
            <Row>
                <Col>
                  <div className="cta_part">
                    <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
                    <div className="cta_text">
                    <a href="#">Get Started</a>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Cta
