import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import femaleProfile from '../../assets/femaleProfile.jpg'
import maleProfile from '../../assets/maleProfile.jpg'
import './Employees.css'
const Employees = ({employees,team,handleOption,handleEmployeeCard}) => {

  return (
    <div>
        <div className="team">
        <select onChange={handleOption} value={team}>
        <option 
        value='Team A'>
        Team A
        </option>
        <option value='Team B' >Team B</option>
        <option value='Team C'>Team C</option>
        <option value='Team D'>Team D</option>
        </select>
        </div>
    <main className='Container'>
{
    employees.map((employee)=>{
        const {Fullname,Desigination,id}=employee

        
        
        return(
            <div className={employee.Teamname===team?'standout':'Information'} key={id} onClick={handleEmployeeCard} id={id}>
            <div className="image-container">
                 {
                <img src={  employee.Gender==='Male'? maleProfile:femaleProfile} alt="" />
                 }
            </div>
            <div className="info">
           <p>Name: {Fullname}</p>
           <p>Desigination: {Desigination}</p>
           </div>
            </div>
        )
    })
}

    </main>
    
    </div>
  )
}

export default Employees