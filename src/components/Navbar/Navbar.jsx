import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import serch_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>New & Popular</li>
                <li>My list</li>
                <li>Browse by language</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={serch_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons' />
            <div className="navbar-profile">
                <img src={profile_img} alt="" className='profile' />
                <img src={caret_icon} alt="" className='' />
            </div>
        </div>
    </div>
  )
}

export default Navbar