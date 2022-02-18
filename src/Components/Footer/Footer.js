import React from 'react'
import './Footer.css'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import github from './github.svg'

function Footer() {
  return (
    <div className="Footer">
        <div className="Footer_text">
        <h2>Suport</h2>
        <p>We are ready for the</p>
        <p>Suport@mytinerary.com</p>
        
        
        </div>

        <div className="Footer_text">
        <h2>Say Hello</h2>
        <p>Cra 19 #23-08</p>
        <p>57+3133761464</p>
        <p>57+3105157158</p>
        
        </div>

        <div className="Footer_text">
      
        <p>© 2022 MyTinerary Inc. All rights reserved.</p>
        
        </div>

        <div class="footer_icon">
            <img src={instagram}></img>
            <img src={twitter}></img>
            <img src={github}></img>
        </div>
    </div>
  )
}

export default Footer