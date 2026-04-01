import React, { useState } from 'react'

function AddUser() {
     const [name,SetName]= useState();
     const [age,SetAge]= useState();
     const [email,SetEmail]= useState();
    async function formhandler(e){
       e.preventDefault()
        console.log(name,age,email);
        const url  = "http://localhost:3000/users";
        let response = await fetch(url,{
            method:"post",
            body:JSON.stringify({name,age,email})
        });
        response = response.json();
        if(response){
            alert("user added")
        }
    }
  return (
    <>
   <span>
  <input type='text' onChange={(e) => SetName(e.target.value)} placeholder='Enter You Name '/>
     <input type='number' onChange={(e) => SetAge(e.target.value)} name='age' placeholder='Enter Your Age' />
     <input type="email" onChange={(e) => SetEmail(e.target.value)} name='email' placeholder='Enter Your Email' />
     <input type='submit' onClick={formhandler} />

   </span>
  
    
    

         </>
  
  )
}

export default AddUser