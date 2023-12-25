'use client'
import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import countupData from './countupData.js'
import './counterUp.css'
export default function CounterUp() {
    const[counterOn,setCounterOn] = React.useState(false)

  return (
 
    <div className='counterup-section'>

          <div className='counterup-show-section'>
            {
              countupData?.map((ele) =>(
                <div className='counterup-single'>
                <p>
                <CountUp  start={0} end = {ele?.count} duration={2} delay={0}/> +{ele?.unit}
                </p>
                <h4>{ele?.title}</h4>
                </div>
              ))
            }
           </div> 
      

    </div>
  )
}


