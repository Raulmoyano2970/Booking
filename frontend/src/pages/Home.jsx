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
//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from "../components/Variant/variants"

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <motion.div
            variants={fadeIn("down", 0.5)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}}  
                  className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Mundo'} />
                        {/* <img src={worldImg} alt="" /> */}
                     </div>
                     <h1>Embarcate en aventuras increibles junto a  <span className='hightlight'> Travel World</span></h1>
                     <p>
                        ¡Tu viaje soñado te espera y nosotros estamos aquí para ayudarte a comenzar una nueva historia inolvidable! Es el momento de emprender esta increíble travesía.
                     </p>
                  </motion.div>
               </Col>

               <Col lg='2'>
                  <motion.div 
                     variants={fadeIn("up", 0.3)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false, amount: 0.7}} 
                  className="hero__img-box">
                     <img src={heroImg} alt=""/>
                  </motion.div>
               </Col>
               <Col lg='2'>
                  <motion.div
                     variants={fadeIn("down", 0.3)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false, amount: 0.7}} 
                      className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls muted autoPlay loop/>
                  </motion.div>
               </Col>
               <Col lg='2'>
                  <motion.div 
                     variants={fadeIn("up", 0.3)} 
                     initial="hidden" 
                     whileInView={"show"} 
                     viewport={{once: false, amount: 0.7}} 
                  className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </motion.div>
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
               <motion.div
               variants={fadeIn("right", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.3
               }}
               >
                  <h5 className="services__subtitle">Nuestros servicios</h5>
                  <h2 className="services__title">Descubrí nuestras ofertas en los mejores destinos.</h2>
                  </motion.div>
               <CardHome/>
            </Row>
         </Container>
      </section>

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <motion.div
                      variants={fadeIn("right", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.3
                      }}
                  >
                  <Subtitle subtitle={'Explora'} />
                  <h2 className='featured__tour-title'>Nuestros tours destacados</h2>
                  </motion.div>
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
                  <motion.div
                     variants={fadeIn("right", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3
                     }}
                  className="experience__content">
                     <Subtitle subtitle={'Experiencia'} />
                     <h2>Trabajamos para ti</h2>
                     <p>Nos esforzamos para crear un diferencia y 
                        <br /> llevar la comodidad hacia donde vayas. </p>
                  </motion.div>

                  <motion.div
                     variants={fadeIn("up", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3
                     }}
                  className="counter__wrapper d-flex align-items-center gap-5">
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
                  </motion.div>
               </Col>
               <Col lg='6'>
                  <motion.div
                     variants={fadeIn("down", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3
                     }}
                  className="experience__img">
                     <img src={experienceImg} alt="" />
                  </motion.div>
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
                  <motion.div
                     variants={fadeIn("right", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3
                     }}
                  >
                  <Subtitle subtitle={'Galeria'} />
                  <h2 className="gallery__title">Visita nuestra galeria de imagenes</h2>
                  </motion.div>
               </Col>
               <Col lg='12'>
                  <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3
                        }}
                  >
                  <MasonryImagesGallery />
                  </motion.div>
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
                  <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.3
                      }}
                  >
                  <Subtitle subtitle={'Reseñas'} />
                  <h2 className="testimonial__title">Que opinan nuestros clientes sobre nosotros</h2>
                  </motion.div>
               </Col>
               <Col lg='12'>
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3
                    }}
                  >
                  <Testimonials />
                  </motion.div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home