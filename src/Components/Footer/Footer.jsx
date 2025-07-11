import React from 'react'
import './Footer.css'
import logo from '../assets/logo.jpeg';
import instagram_icon from '../assets/instagram_icon.jpeg'
import pinterest_icon from '../assets/pinterest_icon.jpeg'
import facebook_icon from '../assets/facebook_icon.jpeg'
import whatsapp_icon from '../assets/whatsapp_icon.jpeg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOP ME</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer