import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { SideBar } from './components/SideBar'
import { Dashboard } from './pages/Dashboard'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


const App = () => {
  return (
    <div className='App'>
      <div className='bell'>
        <span>3</span>
      <FaBell style={{fontSize:'20px',color:'#2b7eca'}} />
      </div>
      <div className="scroll"></div>
      <div className="add"><button><FaPlus style={{color:'#d127b5'}}/></button></div>
      <Navbar/>
      <div className="content">

      <div style={{display:'flex'}}>
      <SideBar/>
      <Dashboard/>
      </div>
      </div>
    </div>
  )
}

export default App