import React from 'react'
import '../components/Styles/Card2.css'
import { LuUser2 } from "react-icons/lu";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

export const Card2 = () => {
  return (
    <div className='CardMain2'>
 <div className="card2">
  <div className="card2_left">
    <p style={{backgroundColor:'#c6ff8e'}}>Free Forever</p>
    <p>Free Starter</p>
    <p>The quickest and easiest way to try Protocols with basic functionalities</p>
    <button style={{backgroundColor:'#c6ff8e'}}>Get Started <span><MdArrowRightAlt style={{fontSize:'30px'}}/></span></button>
    </div>
  <div className="card2_right">
    <p>What you'll get:</p>
    <ul>
      <div id='ul1'>
        <li><LuUser2/></li>
        <li><TiCloudStorageOutline/></li>
        <li><AiOutlineMail/></li>
        <li><RiCheckDoubleLine/></li>
      </div>
      <div id='ul2'> 

      <li>Upto 8 Users</li>
      <li>Upto 3gb Storage</li>
      <li>Email Support</li>
      <li>Basic of Documents, Task Flow, voting, Accounting, Banking, Notesm Investor, Director and Team Management includes</li>
      </div>
    </ul>
  </div>

 </div>
 <div className="card2">
  <div className="card2_left">
    <p style={{backgroundColor:'#8ab8ff'}}>Let's Connect</p>
    <p>Enterprise Plan</p>
    <p>Effortessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
    <button style={{backgroundColor:'#8ab8ff'}}>Contact Us<span><MdArrowRightAlt style={{fontSize:'30px'}}/></span></button>
    </div>
  <div className="card2_right">
    <p>What you'll get:</p>
    <ul>
      <div id='ul1'>
        <li><LuUser2/></li>
        <li><RiCheckDoubleLine/></li>
      </div>
      <div id='ul2'> 

      <li>More than 75 Users</li>
      <li>Customization of all other features</li>
      
      </div>
    </ul>
  </div>

 </div>
 
    </div>
  )
}
