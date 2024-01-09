import React from "react";
import { Container, Row, Col, Card, CardSubtitle, Button,CardBody,CardTitle,CardText } from 'reactstrap'
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
 
 <div className="containerCardMza">
 <Card
  style={{
    width: '20rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
<Card
  style={{
    width: '20rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
<Card
  style={{
    width: '20rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
</div>
 </div>

 


 </>

  )
}

export default Mendoza