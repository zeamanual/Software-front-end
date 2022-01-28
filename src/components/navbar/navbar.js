import React from 'react'
import './navbar.css'
import navButton from '../../assets/image/bg2.jpg'
import {useState} from 'react'

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
            <img onClick={handleNavBtn} className='nav-btn' src={navButton} alt='Nav Button'></img>
            <p className="logo">Logo</p>
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