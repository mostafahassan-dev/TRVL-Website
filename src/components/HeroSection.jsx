import React from 'react'
import Button from './Button'
import './heroSection.css'
import video  from '../videos/video-1.mp4'


function HeroSection() {
    return (
        <div className='trvl__heroSection'>
            <video type="video/mp4"  src={video} autoPlay  loop muted />
            <h1>ADVENTURE AWAITS </h1>
            <p>What are you waiting for?</p>
            <div className="trvl__heroSection-btns">

                <Button text=' GET STARTED ' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'/>
                <Button 
                    text= 'WATCH TRAILER'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    icon ={ <i class="fa-sharp fa-regular fa-circle-play"></i> }
                />
            </div>

        </div>
    )
}

export default HeroSection
