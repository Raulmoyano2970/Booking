import React from "react";
import { Container, Row, Col } from 'reactstrap'
import "../styles/mendoza.css"


const Mendoza = ({ title }) => {
  return (
   <>
     <section className="common__section2">
        <Container>
           <Row>
              <Col lg='12'>
                 <h1>Mendoza</h1>
              </Col>
           </Row>
        </Container>
     </section>
     <div className="containerMza">
 <h2>Viví experiencias únicas</h2>
 <p>Disfruta de un exquisito Tour Vinícola en Mendoza. Cata los mejores vinos y conoce las bodegas más prestigiosas de la región. ¡Saboréa la experiencia al máximo!</p>
 </div>
 </>

  )
}

export default Mendoza