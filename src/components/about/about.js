import React from 'react'
import './about.css'
import logo from '../../assets/image/logo.png'

function About() {
  return (
    <section id='about' className='about-us'>
      <h2 className='title'>About Us</h2>
        <div className='about-us-container'>
            <div className='about-us-img'>
                <img src={logo} alt='about-us'></img>
                <h2 className='name'>Z-Tech</h2>
            </div>
            <div className='about-us-content'>
                <h2 className='title'>Who Are We</h2>
                <p className='about-us-text'>We develop software solutions and use the latest Technologies to drive the growth for business that want to disrupt their industries.</p>
                <p className='about-us-text'>Our mission keeps us focused and accountable, our vision drives us and our values dictate how we succeed. To best understand how we are diffrent, we invite you to work with us and see the diffrence.</p>
                {/* <div > */}
                  <a href='#contact' className='btn'>Get Started</a>
                {/* </div> */}
            </div>
        </div>
    </section>
  )
}

export default About