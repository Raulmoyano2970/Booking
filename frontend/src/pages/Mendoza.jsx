import React from "react";
import { Container, Row, Col } from 'reactstrap'
import wave from "../assets/images/wave.svg"

const Mendoza = ({ title }) => {
  return (
     <section className="common__section2">
        <Container>
           <Row>
              <Col lg='12'>
                 <h1>Mendoza</h1>
              </Col>
           </Row>
        </Container>
     </section>
  )
}

export default Mendoza