import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './GroupedTeamMembers.css'

const GroupedTeamMembers = ({employees,team,setTeam}) => {

  

  const groupedTeamMembers=()=>{
    const teams=[]
    const TeamAMembers=employees.filter((employee)=>employee.Teamname==='Team A')
    const teamA={team:'Team A',members:TeamAMembers,collapsed:team==='Team A'?false:true}
    teams.push(teamA) 

    const TeamBMembers=employees.filter((employee)=>employee.Teamname==='Team B')
    const teamB={team:'Team B',members:TeamBMembers,collapsed:team==='Team B'?false:true}
    teams.push(teamB) 

    const TeamCMembers=employees.filter((employee)=>employee.Teamname==='Team C')
    const teamC={team:'Team C',members:TeamCMembers,collapsed:team==='Team A'?false:true}
    teams.push(teamC) 

    const TeamDMembers=employees.filter((employee)=>employee.Teamname==='Team D')
    const teamD={team:'Team D',members:TeamDMembers,collapsed:team==='Team D'?false:true}
    teams.push(teamD) 

    return teams
  }
  const [groupedEmployees,setGroupData]=useState(groupedTeamMembers())

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);
    setGroupData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }


  return (
     <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.Fullname}</span>
                        </h5>
                        <p>Designation: {member.Desigination}</p>
                      </div>
                    );
                  })
                }
              </div>
              <hr />
            </div>
          );
        })
      }
    </main>
  )
}


export default GroupedTeamMembers