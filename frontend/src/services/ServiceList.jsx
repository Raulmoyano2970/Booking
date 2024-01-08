import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Mendoza`,
      desc: `La combinacion perfecta de hermosos paisajes y una buena copa de vino.`,
   },
   {
      imgUrl: guideImg,
      title: `Argentina`,
      desc: `Recorre desde el maravilloso norte argentino hasta la ciudad mas austral del mundo!.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Mundo',
      desc: `Explora nuevos horizontes, el mundo te espera!.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList