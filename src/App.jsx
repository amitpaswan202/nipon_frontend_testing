import React, { useState } from 'react'
import Stateup1 from "./components/stateup1";
import Stateup2 from "./components/Stateup2";
import UseRefComponent from "./components/UseRefComponent";


function App(){
  const [user,setUser] = useState();
    function inputHandler(event){
   setUser(event.target.value)
    }
  
  return(
    <>

<Stateup1  inputHandler={inputHandler}/>
<Stateup2 user={user}/>
    </>
  )
}

export default App;