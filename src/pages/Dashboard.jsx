import React from 'react'
import './PageStyles/Dashboard.css'
import { Card1 } from '../components/Card1'
import {Card2} from '../components/Card2'
import './PageStyles/Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='Dashboard_header'>
      <h1>Choose a plan that's just fit for you !</h1>
      <div className="d-btn_box">
        <div id="btn">
          <button className='active'>Monthly</button>
          <button>Annually <sup style={{color:'#97d295'}}>-10%</sup></button>
        </div>
      </div>
      </div>
      <Card1/>
      <Card2/>
     <p id='sub'>*some unique features are provided as add-ons with individual plans for each feature </p>
    </div>
  )
}
