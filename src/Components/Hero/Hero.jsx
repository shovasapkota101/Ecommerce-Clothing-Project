import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.jpeg'
import hero_image from '../assets/hero_image.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
//yo 2 ota chai fontawesome batw icon rakhna lai use gareko. teshko lagi first maa terminal open garerw
//npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
//yo BASH install inrnu parxa


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-text-block">
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <FontAwesomeIcon icon={faArrowRight} /> 
                {/* yo chai fontawesome batw arrow icon rakhna lai image ko thau maa lekheko. */}
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
        
    </div>
  )
}

export default Hero