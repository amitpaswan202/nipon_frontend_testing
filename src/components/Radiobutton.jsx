import React, { useState } from 'react'

function Radiobutton() {
    const [gender,setGender] = useState('female');
    const [city,setCity] = useState("mumbai")
   function  handlechange(event){

    setGender(event.target.value)
   }
     function  handlecity(event){

    setCity(event.target.value)
   }
   
  return (
    <>
     <div>radiobutton</div>
     <span>
<input onChange={handlechange} type="radio" name='gender' id='male' value='male'/>
<label htmlFor='male'>Male</label>
     </span>
          <span>
<input onChange={handlechange} checked={gender == 'female'}  type="radio" name='gender' id='Female' value='female'/>
<label htmlFor='Female'>FeMale</label>
     </span>
    <h4> Selected Gender : {gender}</h4>
<br/>
<br/>

 <h1>Select City</h1>

<select onChange={handlecity} defaultValue={city}>

<option value="delhi">delhi</option>
<option value="mumbai">mumbai</option>
<option value="kolkata">kolkata</option>
</select>
<h3>Selected City : {city}</h3>

        </>
  )

   
    
}

export default Radiobutton