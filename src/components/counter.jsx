import React from 'react'
import { useState } from "react";

function Counter() {
     const [count,setCount] = useState(0);
     function increment(){
    setCount((count) => count+1);
  }
  function decrement (){
    if(count > 0){
 setCount(count-1)
    }else{
      setCount(count)
    }
}
  return (
    <div><h1>This is the increment counter</h1>
    <h3>{count}</h3>
    <span>
  <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </span></div>
  )
}

export default Counter;