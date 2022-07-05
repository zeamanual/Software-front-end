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
                <h2 className='titile'>Website Development</h2>
                <p>We will help you create all types of web-based software and ensure great experience for web users. At Z-Tech,  we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
            </div>
            <div className='service'>
                <img src={mobileDev}  alt='mobile app'></img>
                <h2 className='titile'>Mobile App Development</h2>
                <p>If you’re looking to leverage mobile technology for your business, our best app developers are at your service. We provide iOS and Android mobile application development services so you can reach your customers on their favorite devices.</p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
                
            </div>
            <div className='service'>
                <img src={eComm}  alt='ecommerice'></img>
                <h2 className='titile'>E-Commerice</h2>
                <p>We will supply businesses with application tools designed to help them sell their services and products online. We provide a range of secure services to their clients, which include everything from product catalog management to online payment processing. </p>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

export default Service