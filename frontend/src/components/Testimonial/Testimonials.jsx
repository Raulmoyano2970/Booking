import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>
         El hotel está increíble. La atención de José del turismo fue impecable. Y ya coordinamos con el otra salida.muchas gracias!!!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Juan Carlos G</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      {/* <div className="testimonial py-4 px-3">
         <p>Ha sido una experiencia hermosa! Rocío nos asesorarán super bien en nuestro viaje a Miami y Orlando. Todos los vuelos y hotelería espectacular. Lo que más agradezco es la predisposición y seguimiento que nos hicieron en caso que algo no saliera como lo previsto. Muchas gracias Tokio Viajes, muy recomendables!!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>msofiatovar</h6>
               <p>cliente</p>
            </div>
         </div> 
      </div> */}

      <div className="testimonial py-4 px-3">
         <p>Passeio muito agradável. Agência cumpriu horários combinados. Guia muito atencioso e simpático. Almoço muito bom. Recomendo
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Celso Edgar S</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Empresa de mucha confianza. Resolución inmediata a las sugerencias y un trato por demás agradable.
            Indudablemente la recomendaría a mis conocidos.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Enrique C</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials