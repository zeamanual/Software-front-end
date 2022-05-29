import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/image/logo.png'
import { faGithub,faFacebook,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(){

    return(
    <footer>
        <div className='first-row'>
            <div className='company-information'>
             <a href='#header'>
                <div className='name-logo'>
                    <img src={logo} alt = 'Company logo'></img>
                    <h2 className='name'> Z-Tech</h2>
                </div>
             </a> 
            <p className='info'> <span> Technology Solutions </span>For Your Business</p>

            </div>
            <div className='footer-services'>
                <h2 className='title'>Our Services</h2>
                <a href='#service'> <li>Web Development</li></a>
                <a href='#service'><li>Android App Development</li></a>
                <a href='#service'><li>IOS App Development</li></a>
               <a href='#service'> <li>Eccomerce</li></a>
                <a href='#service'><li>Consultancy</li></a>
            </div>
            <div className='footer-services'>
                <h2 className='title'>Quick Navigation</h2>

                {/* <a href='#header'><li>Back To Top</li></a> */}
                <a href='#service'><li>Services</li></a>
                <a href='#about'><li>About Us</li></a>
                <a href='#teams'><li>Teams</li></a>
                <a href='#testimonial'><li>Client FeedBack</li></a>
                <a href='#contact'><li>Contact</li></a>

            </div>
            <div className='links'>
                <h2 className='title'>Stay Connected</h2>
                <div className='icons'>

                <a href='github.com'> <FontAwesomeIcon className='icon git' icon={faGithub}></FontAwesomeIcon></a>
                <a href='twitter.com'><FontAwesomeIcon className='icon twitter' icon={faTwitter}></FontAwesomeIcon></a> 
                <a href='facebook.com'><FontAwesomeIcon className='icon facebook' icon={faFacebook}></FontAwesomeIcon></a>
                <a href='linkedin.com'><FontAwesomeIcon className='icon linkedin' icon={faLinkedin}></FontAwesomeIcon></a>
                <a href='gmail.com'><FontAwesomeIcon className='icon email' icon={faEnvelope}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
        <div className='second-row'>
        <p><span>Z-Tech </span> All rights reserved  <FontAwesomeIcon icon={ faCopyright}></FontAwesomeIcon> 2022 </p>
        <p>Designed By <a href= 'mailto:zeamanualfeleke@gmail.com'><span>Zeamanual Feleke</span> </a></p>
        </div>
    </footer>
    )
}

export default Footer