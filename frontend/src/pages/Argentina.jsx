import React from "react";
import { Container, Row, Col } from 'reactstrap'
import "../styles/argentina.css"

const Argentina = ({ title }) => {
  return (
   <>
     <section className="common__section3">
        <Container>
           <Row>
              <Col lg='12'>
                 <h1>Argentina</h1>
              </Col>
           </Row>
        </Container>
     </section>
     <div className="containerArg">
      <h2>Conocé el país campeón del mundo</h2>
      <p>¡Descubre la magia de Argentina! Te invitamos a explorar un país lleno de maravillas naturales, cultura vibrante y gente amable. Desde las majestuosas cataratas de Iguazú hasta la emocionante vida nocturna de Buenos Aires y maravillate con los paisajes de la Patagonia.</p>
     </div>
   
     </>
  )
}

export default Argentina