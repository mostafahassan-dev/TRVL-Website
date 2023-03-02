import React from 'react'
import { FaTypo3 } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from './Button'
import './footer.css'

function Footer() {
  return (
    <div className='trvl__footer'>

      <div className="trvl__footer-container">

        <h1> Join the Adventure newsletter to receive our best vacation deals</h1>
        <p> You can unsubscribe at any time.</p>

        <div className="trvl__footer-container_input">
          <input placeholder='Your Email' type='email'/>
          <Button buttonStyle='btn--outline' text = 'Subscribe'/>
        </div>

        <div className="trvl__footer-container_links">

          <div className="trvl__footer-container_links-div">
            <h4>About Us</h4>
            <p>How it works</p>
            <p>Testimonials</p>
            <p>Careers</p>
            <p>Investor</p>
            <p>Terms of Service</p>
          </div>

          <div className="trvl__footer-container_links-div">
            <h4>Contact Us</h4>
            <p>Contact</p>
            <p>Suport</p>
            <p>Destination</p>
            <p>sponsorship</p>
            
          </div>

          <div className="trvl__footer-container_links-div">
            <h4>Videos</h4>
            <p>Submit Videos</p>
            <p>Ambassadors</p>
            <p>Agency</p>
            <p>Influencer</p>

          </div>

          <div className="trvl__footer-container_links-div">
            <h4>Social Media</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Twitter</p>
            
          </div>

        </div>
      
      <div className="trvl__footer-container_icons">

        <div className="trvl__footer-container_icons-logo">
          <Link to = '/'>TRVL   </Link>
          <FaTypo3 />
        </div>
        <div className="trvl__footer-container_icons-copyright">
          <small class='website-rights'>TRVL © 2020</small>
        </div>

        <div className="trvl__footer-container_icons-icons">
          <i class='fab fa-facebook-f' />
          <i class='fab fa-instagram' />
          <i class='fab fa-youtube' />
          <i class='fab fa-twitter' />
          <i class='fab fa-linkedin' />
        </div>

      </div>
    </div>

    </div>
  )
}

export default Footer
