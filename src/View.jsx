import React, { useContext } from 'react'
import { NewContext } from './App'
import { useParams } from 'react-router-dom'

function View() {
    const {u}=useParams()
    const [data1,setData1]=useContext(NewContext)
    const d=data1[u]
  return (
    <div>
        <h1 style={{color:"red"}}>{d.name}</h1>
        <h1>{d.age}</h1>
        <h1>{d.class}</h1>
    </div>
  )
}

export default View