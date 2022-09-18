import React from 'react'
import './Header.css'

const Header = ({team,employees}) => {
const empid=employees.filter((employee)=>employee.Teamname===team)

  return (
    <header>
      <div className='headerContainer'> 
        <h3>Team Member allocation</h3>
        <p className='TeamInfo'>{team} has {empid.length} members </p>
      </div>
       
    </header>
  )
}

export default Header