import React from 'react'
import { useState } from 'react'

function ToggleButton() {
    const [toggle,setToggle] = useState(true);
  return (
    <>
      <h1>welcome to toggle </h1>
      <br />
      <button onClick={() => setToggle(!toggle)}>Click to change</button>
      {toggle?<h2>Toggle Text </h2>:null}
      
    </>
  
  )
}

export default ToggleButton