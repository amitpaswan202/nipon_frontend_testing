import React, { useState } from 'react'


function MultipleCondition() {
    const [count,setCount] = useState(0);
    function update(){
        setCount(count+1)
    }
  return (
    <>
    
    <div>multipleCondition</div>
    <button onClick={update}>update</button>
    {count}
{ count == 0
?<h1>this is Zero value</h1>
:count == 2?<h4>conditon is 2 working</h4>
:count == 3?<h4>conditon is 3 working</h4>
:count == 4?<h4>conditon is 4 working</h4>
:count == 5?<h4>conditon is 5 working</h4>
:null

}


    </>
    
  )
}

export default MultipleCondition