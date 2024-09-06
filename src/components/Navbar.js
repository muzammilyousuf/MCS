import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className={(e)=> {return  e.isActive? "red" : ""}}  to='/'><li>Home</li></NavLink>
            <NavLink className={(e)=> {return  e.isActive? "red" : ""}} to='/About'><li>Why Choose Us</li></NavLink>
            <NavLink className={(e)=> {return  e.isActive? "red" : ""}} to='/Contact'><li>Contact Us</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar