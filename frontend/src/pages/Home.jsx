import React from 'react'
import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroImg from '../assets/images/bolson.jpg'
import heroImg02 from '../assets/images/cordillera.jpg'
import heroVideo from '../assets/images/review.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'
import CardHome from '../components/CardHome/CardHome'

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Mundo'} />
                        {/* <img src={worldImg} alt="" /> */}
                     </div>
                     <h1>Embarcate en aventuras increibles junto a  <span className='hightlight'> Tokio viajes</span></h1>
                     <p>
                     ¡Tu viaje soñado los espera, nosotros te ayudamos, comenzá una nueva historia inolvidable! Es el momento de arrancar esta increíble travesía.
                     </p>
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt=""/>
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls muted autoPlay loop/>
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col>

               <SearchBar />
            </Row>
         </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      <section>
         <Container>
            <Row>
                  <h5 className="services__subtitle">Nuestros servicios</h5>
                  <h2 className="services__title">Descubrí nuestras ofertas en los mejores destinos.</h2>
               <CardHome/>
            </Row>
         </Container>
      </section>

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explora'} />
                  <h2 className='featured__tour-title'>Nuestros tours destacados</h2>
               </Col>
               <FeaturedTourList/>
            </Row>
         </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experiencia'} />
                     <h2>Trabajamos para ti</h2>
                     <p>Nos esforzamos para crear un diferencia y 
                        <br /> llevar la comodidad hacia donde vayas. </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>+12k</span>
                        <h6>Viajes exitosos</h6>
                     </div>
                     <div className="counter__box">
                        <span>+2k</span>
                        <h6>Clientes satisfechos</h6>
                     </div>
                     <div className="counter__box">
                        <span>+5</span>
                        <h6>Años de experiencia</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Galeria'} />
                  <h2 className="gallery__title">Visita nuestra galeria de imagenes</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Reseñas'} />
                  <h2 className="testimonial__title">Que opinan nuestros clientes sobre nosotros</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home