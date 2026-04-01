import React from 'react'
import { NavLink } from 'react-router';

import "./userDatacss.css";
function HeaderRoutes() {
  return (
    <>
      <div><h4>UserDataApi Page</h4></div>
      <div className='header-menu'>
<NavLink to="/">Home</NavLink>
        <NavLink to="/addUser">Add User</NavLink>
        <br></br>
        <br></br>
      </div>
     
      
  
   
    </>
   
  )
}

export default HeaderRoutes;