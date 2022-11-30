import React from 'react'
import '../css_styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='left-footer'>
            <h4>Support</h4>
            <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>API Status</li>
                <li>Documentation</li>
            </ul>
        </div>

        <div className='right-footer'>
            <h4>Info</h4>
            <ul>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Invest</li>
                <li>Legal</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer