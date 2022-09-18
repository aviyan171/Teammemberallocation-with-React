import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
       <div className="navigation-container">
        <ul className='lists'>
            <li><Link className='Links' to='/'>Home</Link></li>
            <li><Link className='Links'  to="/GroupedTeamMembers">Teams</Link></li>
        </ul>
       </div>
    {/* <Outlet/> */}
    </nav>
  
  )
}

export default Navbar