import React from 'react'
import './services.css'
import webDev from '../../assets/image/webDev.png'
import eComm from '../../assets/image/ecommerice.png'
import mobileDev from '../../assets/image/mobiledev.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Service() {
  return (
    <div id='service' className='services'>
        <h2 className='title'>Our Services</h2>
        <div className='service-list'>
            <div className='service'>
                <img src={webDev}  alt='web'></img>
                <h2 className='titile'>Web Development</h2>
                <p>information about servie information about servie information about servieinformation about servie information about servieinformation about servie </p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
            </div>
            <div className='service'>
                <img src={mobileDev}  alt='mobile app'></img>
                <h2 className='titile'>Mobile App Development</h2>
                <p>information about servie information about servie information about servieinformation about servie information about servieinformation about servie </p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
                
            </div>
            <div className='service'>
                <img src={eComm}  alt='ecommerice'></img>
                <h2 className='titile'>E-Commerice</h2>
                <p>information about servie information about servie information about servieinformation about servie information about servieinformation about servie </p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

export default Service