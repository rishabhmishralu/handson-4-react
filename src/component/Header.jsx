import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <div className='header'>
            <NavLink to="/" className="link"><div className='nav'>Home</div></NavLink>
            <NavLink to="/student"  className="link"><div className='nav'>Student</div></NavLink>
            <NavLink to="/contact"  className="link"><div className='nav'>ContactUs</div></NavLink> 
        </div>
    </div>
  )
}

export default Header