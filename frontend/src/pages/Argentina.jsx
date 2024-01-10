import React from "react";
import { Container, Row, Col, Card, CardSubtitle, Button,CardBody,CardTitle,CardText } from 'reactstrap'
import "../styles/argentina.css"
import NewsLetter from "../shared/Newsletter";

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
      <div className="containerCardArg">
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
        <NewsLetter/>
      </div>
    </>
  )
}

export default Argentina