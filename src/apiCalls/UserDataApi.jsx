import React, { useEffect, useState } from "react";
import "./userDatacss.css";
import { useNavigate } from "react-router";
function UserDataApi() {
  const [userdata, setUserData] = useState([]);
  const Navigate = useNavigate();
    const url = "http://localhost:3000/users";

  useEffect(() => {
    userDataApiCall();
  }, []);

  async function userDataApiCall() {
  
    let response = await fetch(url);
    let finalData = await response.json();
      //  console.log(finalData)
    setUserData(finalData);
  }


  async function deleteUser(id){
    let response = await fetch(url+"/"+id,{
      method:"delete"
    })
    response = await  response.json();
    if(response){
      alert("user deleted")
        userDataApiCall();

    }

  }
  function editUser(id){
Navigate("/edit/"+id)
  }
  console.log(userdata)
  return (
    <>
 
      <ul className="listUl title">
        <li>
          <b>Profile</b>
        </li>
        <li>
          <b>Name </b>{" "}
        </li>
        {/* <li>
          <b>maidenName</b>{" "}
        </li>
        <li>
          <b>lastName</b>
        </li> */}
        <li>
          <b>age</b>
        </li>
        <li>
          <b>Email</b>
        </li>
             <li>
          <b>Action</b>
        </li> 
      </ul>
      {userdata &&
        userdata.map((item) => {
          // console.log(item.name);
          return (
            <ul className="listUl">
              <li>
                {" "}
                <img src={item.image} width="50" height={50} />{" "}
              </li>
              <li>{item.name}</li>
              {/* <li>{item.maidenName}</li>
              <li>{item.lastName}</li> */}
              <li>{item.age}</li>
              <li>{item.email}</li>
              
              <li><button onClick={() => {deleteUser(item.id)}}>Delete</button></li>
              <li><button onClick={() => {editUser(item.id)}}>Edit</button></li>
            </ul>
          );
        })}
    </>
  );
}

export default UserDataApi;
