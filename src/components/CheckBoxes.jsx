import React, { useState } from 'react'

function CheckBoxes() {

    const [skils,setSkills] = useState([])
    function handleDisplay(event){
       if(event.target.checked){
          setSkills([...skils,event.target.value])
       }else{
        setSkills(skils.filter((item) => item !== event.target.value));
       }
      

       
    }
  return (
    <>
     <div>CheckBoxes</div>
     <span>
  <input onChange={handleDisplay} type='checkbox' id='react' value="React" />React
     <label htmlFor='react' />
     </span>
   
<span>

  <input onChange={handleDisplay} type='checkbox' id='javascript' value="javascript" />Javascript
     <label htmlFor='javascript' />
</span>
       
<span>
    <input onChange={handleDisplay} type='checkbox' id='node' value="node" />node

     <label htmlFor='node' />
</span>
       
<span>
  <input onChange={handleDisplay} type='checkbox' id='Java' value="Java" />Java
     <label htmlFor='java' />
     <h1>{skils.join(" , ")}</h1>

</span>
         
    
    </>
   
  )
}

export default CheckBoxes