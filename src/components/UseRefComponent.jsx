import React, { useRef } from 'react'

function UseRefComponent() {
    const usernameRef = useRef();
    const passRef = useRef();

const handleForm =(event)=>{
    event.preventDefault();
    // usernameRef.current.value
    console.log( usernameRef.current.value, passRef.current.value)
}
  return (
    <>
      <div>UseRefComponent</div>
    <form>
        <input ref={usernameRef} type='text' id='name' placeholder='enter your name' />
<br /><br />
        <input ref={passRef} type='password' id='password' placeholder='enter your password' />
<br /><br />
        <button onClick={handleForm}>Submit</button>
    </form>
    </>
  

  )
}

export default UseRefComponent