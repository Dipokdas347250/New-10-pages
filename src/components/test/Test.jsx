import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./test.css"
import group from "../../assets/Group.png"
import one from "../../assets/on.png"

const Test = () => {
  return (
   <section id='test'>
    <Container>
        <Row>
            <Col lg={4}>
                <div className="test_text">
                    <a href="#">Testimonials</a>
                    <h2>Check what our 
                       clients are saying</h2>
                </div>
            
            </Col>
        </Row>
        <Row>
            <Col lg={7}>
            <div className="test_img">
                <img src={group} alt="" />
            </div>
            </Col>
            <Col lg={5}>
             <div className="test_item">
                <img src={one} alt="" />
                <h3>Save Time Managing Social Media For Your Business</h3>
                <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                <h5>Believing neglected so so allowance existence departure in. In design active temper be uneasy. </h5>
                <h3>Angela Taylor</h3>
                <h6>CEO SAMSUNG</h6>
             </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Test
