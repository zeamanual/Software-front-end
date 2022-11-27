import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/image/logo.png'
function NavBar() {
    let [navShown, setNavShown] = useState(false)
    let handleNavBtn = () => {
        setNavShown((prevState) => {
            return !prevState
        })
    }
    let handleNavItemsClinkOnSmallScreen = () => {
        setNavShown(false)
    }
    return (
        <div>
            <nav>
                <FontAwesomeIcon className='nav-btn' icon={faBars} onClick={handleNavBtn} />
                <a href='#header'> <img src={logo} alt='company logo' className="logo" /></a>
                <div className={navShown ? 'nav-lists show-nav-bar' : 'nav-lists'}>
                    <ul>
                        <li onClick={handleNavItemsClinkOnSmallScreen}><a href='#service'> Services  </a></li>
                        <li onClick={handleNavItemsClinkOnSmallScreen}><a href='#about'>  About </a></li>
                        <li onClick={handleNavItemsClinkOnSmallScreen}><a href='#teams'>  Teams </a></li>
                        <li onClick={handleNavItemsClinkOnSmallScreen}><a href='#testimonial'>  Client FeedBack </a></li>
                        <a onClick={handleNavItemsClinkOnSmallScreen} className="contact-us-btn" href='#contact'>Contact Us </a>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar