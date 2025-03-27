import React, { useContext, useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import serch_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { authContext } from '../../ContextAPI'



const Navbar = () => {

  const {logout} = useContext(authContext)  
  const navRef = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 80){
            navRef.current.classList.add('nav-dark')
        }else{
            navRef.current.classList.remove('nav-dark')
        }
    })
  })
  return (
    <div ref={navRef} className='navbar'>
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
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar