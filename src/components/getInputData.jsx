import { useState } from "react";

function GetInputData(){
    const [val,setVal] = useState()
    return(
<>
  <h1>Get Input Field data </h1>
  <input value={val} onChange={(event)=>setVal(event.target.value)} placeholder="enter your Value" />
  {val}
   <button onClick={()=>
    {   console.log(val)
        setVal("")

    }}>Clear</button>
</>
    )
}

export default GetInputData;