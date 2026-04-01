import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function EditUser() {
    const {id} = useParams()
    const [name,SetName]= useState();
    const [age,SetAge]= useState();
    const [email,SetEmail]= useState();
    const Navigate = useNavigate()
    const url = "http://localhost:3000/users/";
    console.log(id)
   useEffect(()=>{
    getUserData();
   },[])


  const  getUserData = async ()=>{
    
  let response = await fetch(url+id)
  response = await response.json();
  console.log(response.name)
  if(response){
    SetName(response.name)
    SetAge(response.age)
    SetEmail(response.email)
  }


    

   }

async function updateUserData(){
let response = await fetch(url+id,{
    method:"PUT",
    body:JSON.stringify({
        name,
        age,email
        

    })
})
  response = await response.json();
  console.log(response.name)
   SetName(response.name)
    SetAge(response.age)
    SetEmail(response.email)
  if(response){
   alert("user data updated")
   Navigate('/')

  }
}
  return (
    <>
     <div>EditUser</div>
     <span>
     <input type='text' value={name} onChange={(e)=>SetName(e.target.value)} placeholder='Enter You Name '/>
     <input type='number' value={age} onChange={(e)=>SetAge(e.target.value)} name='age' placeholder='Enter Your Age' />
     <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} name='email' placeholder='Enter Your Email' />
    <button onClick={updateUserData}> update user</button>

   </span>
    
    </>
   
  )
}

export default EditUser