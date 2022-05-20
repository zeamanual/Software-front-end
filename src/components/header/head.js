import React from 'react'
import NavBar from '../navbar/navbar'
import './head.css'
import descImg from '../../assets/image/intro-img.png'


function Header() {
  return (
    <>
    <header id='header' className='header'>
        <NavBar></NavBar>
        <div className='company-desc'>
           <div className='text'>
              <h2>Z-Tech</h2>
              <p><span>Technology Solutions  </span>For Your Business</p>
              <a className='btn' href='#service'>Get Started</a>
           </div>
           <div className='img'>
            <img src ={descImg}/>
           </div>
        </div>
    </header>
    </>

  )
}

export default Header