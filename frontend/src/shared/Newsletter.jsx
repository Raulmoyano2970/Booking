import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>¡No te pierdas nuestras promociones!</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subcribe</button>
                     </div>
                     <p>Sé parte de nuestra comunidad para conocer los mejores descuentos, aprovecha las promociones exclusivas y mucho más. ¡Suscribete!
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter