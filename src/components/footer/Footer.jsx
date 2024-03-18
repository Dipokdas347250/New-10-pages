import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"

const Footer = () => {
  return (
    <section id='footer'>
        <Container>
        <Row>
                <Col lg={5}>
                 <div className="footer_text">
                 <h2>BWFC</h2>
                 <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                 </div>
                </Col>
                <Col lg={{span:2,offset:1}}>
                 <div className="footer_item">
                    <h3>Company</h3>
                    <ul>
                    <li><a href="#">About Us</a>   </li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    </ul>
                 </div>
                </Col>
                <Col lg={2}>
                 <div className="footer_item">
                    <h3>Product</h3>
                    <ul>
                    <li><a href="#">Invoicing Platform</a>   </li>
                    <li><a href="#">Accounting </a></li>
                    <li><a href="#">Create Proposal</a></li>
                    <li><a href="#">Contracts</a></li>
                    </ul>
                 </div>
                </Col>
                <Col lg={2}>
                 <div className="footer_item">
                    <h3>Resources</h3>
                    <ul>
                    <li><a href="#">Proposal Template</a>   </li>
                    <li><a href="#">Invoice Template</a></li>
                    <li><a href="#">Tuturoial</a></li>
                    <li><a href="#">Pricing</a></li>
                    </ul>
                 </div>
                </Col>
            </Row>
            <div className="footer_part">
                
            </div>
        </Container>
    </section>
  )
}

export default Footer
