import React from 'react'
import TourCard from '../../shared/TourCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'
import { motion } from 'framer-motion'
import { fadeIn } from '../Variant/variants'

const FeaturedTourList = () => {
   const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)
   // console.log(featuredTours)

   return (
      <>
         { loading && <h4>Loading.....</h4> }
         { error && <h4>{error}</h4> }
         {
            !loading && !error &&
            featuredTours.slice(0, 4)?.map(tour => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
                  <motion.div
                     variants={fadeIn("left", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3
                     }}
                  >
                  <TourCard tour={tour} />
                  </motion.div>
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedTourList 