import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./poss.css"

const Poss = () => {
  return (
    <section id='poss'>
        <Container>
            <Row>
                <Col lg={5}>
                 <div className="poss_text">
                    <a href="#">Why Choose Us</a>
                    <h2>Track your crytpo portfolio on the best way possible</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                 </div>
                </Col>
                <Col lg={{ span: 4, offset: 2 }}>
                  <div className="poss_from">
                      
                      <form action="">
                        <input className='one' type="text"  placeholder='Email Address' />
                        <input className='two' type="Password" placeholder='Password' />
                        
                        
                      </form>
                      <p>Get Started</p>
                  </div>

              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Poss
