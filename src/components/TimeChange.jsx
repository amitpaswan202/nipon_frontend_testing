import React, { useEffect, useState } from 'react'

function TimeChange({color}) {
    console.log(color)
const [time,setTime] = useState(0)

useEffect(() => {
   setInterval(()=>{
  setTime(new Date().toLocaleTimeString())
   },1000)
},[])
  return (
    <>
     <div>TimeChange Clock</div>
   
   <h1 style={{color:'color', backgroundColor:'black', width:'200px', padding:'50px',borderRadius:'20px'}}>{time}</h1>
    

    </>

  )
}

export default TimeChange