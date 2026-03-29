import React from 'react'

export default function nameArray() {
    let names = ["amit","anil","raj","roshan"];
  return (
    <>
    
        <div>nameArray</div>
    <div>  {names.map((name,index)=>{
     return <p key={index}>{name}</p>
    })} </div>
    </>

  
  )
}
