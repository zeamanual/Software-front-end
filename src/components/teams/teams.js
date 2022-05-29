import React from 'react'
import './teams.css'
import person1Img from '../../assets/image/p2.jpg'
import person2Img from '../../assets/image/p3.png'
import person3Img from '../../assets/image/p4.png'
import person4Img from '../../assets/image/p1.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Teams() {
  return (
    <secion className='teams'>
        <h2 className='title'>Meet Our Team</h2>
        <div className='team-desc'>
            <div className='team'>
                <div className='img-container'>
                    <img src={person1Img} className='team-img' alt='team1'></img>
                    <div className='team-info'>
                        <h2 className='title'>Joshuwa Dave</h2>
                        <p className='role'>Cenior Front-End Developer And UI/UX Designer</p>
                        <div className='links'>
                                <FontAwesomeIcon className='icon icon-linkedin' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-twitter' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-git' icon={faGithub}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>

            <div className='team'>
                <div className='img-container'>
                    <img src={person2Img} className='team-img' alt='team2'></img>
                    <div className='team-info'>
                        <h2 className='title'>Jason Mike</h2>
                        <p className='role'>Cenior Back-End Developer, Cloud-Computing Engineer and Security Researcher</p>
                        <div className='links'>
                                <FontAwesomeIcon className='icon icon-linkedin' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-twitter' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-git' icon={faGithub}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='team'>
             <div className='img-container'>
                <img src={person3Img} className='team-img' alt='team3'></img>
                <div className='team-info'>
                    <h2 className='title'>Edward Snowdeen</h2>
                    <p className='role'>Junior Front-End Developer</p>
                    <div className='links'>
                                <FontAwesomeIcon className='icon icon-linkedin' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-twitter' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-git' icon={faGithub}></FontAwesomeIcon>
                    </div>
                </div>
            </div>               

            </div>
            <div className='team'>
             <div className='img-container'>
                <img src={person1Img} className='team-img' alt='team4'></img>
                <div className='team-info'>
                    <h2 className='title'>David Jakson</h2>
                    <p className='role'>Project Manager and Eccomerce Expert</p>
                    <div className='links'>
                                <FontAwesomeIcon className='icon icon-linkedin' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-twitter' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='icon icon-git' icon={faGithub}></FontAwesomeIcon>
                    </div>
                </div>
            </div>               

            </div>
        </div>
    </secion>
  )
}

export default Teams