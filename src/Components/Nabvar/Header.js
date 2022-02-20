import React from 'react'
import logo from './mytinerary.svg'
import logoUser from './user.svg'
import './Header.css'
import { Link as LinkRouter } from "react-router-dom"


function Header() {

  return (
    <>
      <div className="header">
      <div className="header_div">
        <img src={logo}></img>
        <div className="nav">
          <LinkRouter to="home" className="link">Home</LinkRouter>
          <LinkRouter to="cities" className="link">Cities</LinkRouter>
        </div>
        </div>
        <div className="logouser">
          <img src={logoUser}></img>
        </div>
      </div>
    </>

  )
}

export default Header