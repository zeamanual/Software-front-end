import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import person1 from '../../assets/image/p1.jpeg'
import person2 from '../../assets/image/p2.jpg'
import person3 from '../../assets/image/p3.png'
import person4 from '../../assets/image/p4.png'
import './testimonials.css'


function Testimonial(){

    return <div className='testimonials'>
        <h2>What People Say About Us</h2>
        <div className='testimonial'>
            <div className='card'>
                 <FontAwesomeIcon> </FontAwesomeIcon>
                 <p className='comment'></p>
                 <FontAwesomeIcon> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src={person1} alt='person image'></img>
                    <h2 className='name'>Name</h2>
                    <p className='Origin'>Origin</p>
                 </div>
            </div>

        </div>
    </div>
}

export default Testimonial