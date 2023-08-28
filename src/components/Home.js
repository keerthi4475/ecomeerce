import React from 'react'
import admincomponent from './admincomponent'
import './Hstyle.css';

export default function Home() {
 const admin =()=>{
        window.location.href="/admin"
    }
  const  user =()=>{
    window.location.href="/user"
   }
  return (
    <div className="centered-form">   
        <a href>     </a>
       <center>
        <button onClick={admin}  className="blue-text-field">Admin</button>   
        <button onClick={user}   className="blue-text-field">User</button>   </center>
    </div>
  )
}
