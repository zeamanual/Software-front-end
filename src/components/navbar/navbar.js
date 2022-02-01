import React from 'react'
import './navbar.css'
import navButton from '../../assets/image/bg2.jpg'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/image/logo.png'
function NavBar() {
    let [navShown,setNavShown]=useState(false)
    let handleNavBtn=()=>{
        setNavShown((prevState)=>{
            return !prevState
        })
    }
  return (
    <div>
        <nav>
            <FontAwesomeIcon className='nav-btn' icon={faBars} onClick={handleNavBtn}  />
            <a href='#'> <img src={logo} className="logo"/></a>
            <div className= {navShown ? 'nav-lists show-nav-bar' :'nav-lists'}>
                <ul>
                    <li><a href='#'> Services  </a></li>
                    <li><a href='#'>  About </a></li>
                    <li><a href='#'>  Expertise </a></li>
                </ul>
                <button className="contact-us-btn">Contact Us</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar