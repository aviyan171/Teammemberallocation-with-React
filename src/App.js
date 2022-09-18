import { useEffect, useState } from "react";
import Employees from "./components/Employees/Employees";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route,Routes } from "react-router-dom";
import GroupedTeamMembers from "./components/GroupedTeamMembers/GroupedTeamMembers";

function App() {
  const Employeees=[
        {
            id:1,
            Fullname:'Abhiyan Upreti',
            Desigination:'React Developer',
            Gender:'Male',
            Teamname:'Team A ',
        },
        {
            id:2,
            Fullname:'Bipul Bajracharya',
            Desigination: 'Django Developer',
            Gender:'Male',
            Teamname:'Team B',
        },
        {
            id:3,
            Fullname:'Margret Shelby',
            Desigination:'Data base Administrator',
            Gender:'Female',
            Teamname:'Team C',
        },
        {
            id:4,
            Fullname:'Claire Freshar',
            Desigination:'Data-Operator',
            Gender:'Female',
            Teamname:'Team D',
        },
        {
            id: 5,
            Fullname:'Sally Singh',
            Desigination:'Intern',
            Gender:'Female',
            Teamname:'Team A',
        },
        {
            id: 6,
            Fullname:'Jimmy Macgill',
            Desigination:'Lowyer',
            Gender:'Male',
            Teamname:'Team B',
        },
        {
            id: 7,
            Fullname:'Geroge Simmons',
            Desigination:'C++ Developer',
            Gender:'Male',
            Teamname:'Team C',
        },
        {
            id: 8,
            Fullname:'Emily Wills',
            Desigination:'C# Developer',
            Gender:'Female',
            Teamname:'Team D',
        },
        {
            id: 9,
            Fullname:'Anmol Upreti',
            Desigination:'Python Developer',
            Gender:'Male',
            Teamname:'Team A',
        }
    ]

const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employee'))||Employeees)

const [team,setTeam]=useState(JSON.parse(localStorage.getItem('team'))||'Team A')

const handleOption=(e)=>{
   setTeam(e.target.value)
    
   
}

const handleEmployeeCard=(e)=>{
 const transformedEmployees=employees.map((employee)=>employee.id===parseInt(e.currentTarget.id)
 ?(employee.Teamname===team)?{...employee,Teamname:''}:{...employee,Teamname:team}:employee)
 setEmployees(transformedEmployees)

}

useEffect(()=>{
  localStorage.setItem('employee',JSON.stringify(employees))
},[employees])

useEffect(()=>{
  localStorage.setItem('team',JSON.stringify(team))
},[team])
  return (
    <>
    <Navbar/>
    <Header team={team} employees={employees}/>
    <Routes>
    <Route path='/' element={
    <>
    <Employees
      employees={employees}
      team={team}
      handleOption={handleOption}
      handleEmployeeCard={handleEmployeeCard}
      />
      </>
    }
      />
    <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} team={team} setTeam={setTeam}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
