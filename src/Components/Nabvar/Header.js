import React from 'react'
import logo from './mytinerary.svg'
import logoUser from './user.svg'
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {

  return (
    <>
      <div className="header">
        <img src={logo}></img>

        <ul class="nav">
          <li>Home
          </li>
          <li>Cities
          </li>
        </ul>

        <div className="logouser"> <img src={logoUser}></img></div>

      </div>

    </>

  )
}

export default Header