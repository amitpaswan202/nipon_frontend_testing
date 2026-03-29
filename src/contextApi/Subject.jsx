import React, { useContext } from 'react'
import { SubjectConstextApi } from './SubjectContext'

function Subject() {
  const Level = useContext(SubjectConstextApi)
  return (
      <>
      <div style={{backgroundColor:"red",padding:'20px'}}>Subject : {Level}</div>
     
    </>
  )
}

export default Subject