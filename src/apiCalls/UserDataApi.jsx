import React, { useEffect, useState } from 'react'
import "./userDatacss.css"
function UserDataApi() {
    const [userdata,setUserData] = useState([])

    useEffect(()=>{
     
    userDataApiCall()
    },[])

    async function userDataApiCall(){
     const url = "https://dummyjson.com/user";
     let response = await fetch(url);
     let finalData = await response.json();
//    console.log(finalData.users)
    setUserData(finalData.users)
    }
    // console.log(userdata)
  return (
    <>
    <div>UserDataApi Page</div>
<br/><br/><ul className='listUl title'>
    <li><b>Profile</b></li>
    <li><b>firstName </b> </li>
    <li><b>maidenName</b> </li>
    <li><b>lastName</b></li>
    <li><b>age</b></li>
<li><b>gender</b></li>
    
 </ul>
    {
        userdata && userdata.map((item)=>{
            console.log(item.firstName);
 return  <ul className='listUl'>
    <li> <img src={item.image} width='50' height={50}  /> </li>
    <li>{item.firstName}  </li>
    <li>  {item.maidenName} </li>
    <li>  {item.lastName} </li>
    <li>  {item.age} </li>
<li>  {item.gender} </li>
    
 </ul>

        })
    }
    </>
    
  )
}


export default UserDataApi