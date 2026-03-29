import { useId } from "react"


function Stateup1({inputHandler}) {
    const name = useId();

  
  return (
    <>
     <div>stateup1</div>
     {name}
     <h3>Add user</h3>
     <input type='text' onChange={inputHandler}

        
    />
         
    </>
   

  )
}

export default Stateup1