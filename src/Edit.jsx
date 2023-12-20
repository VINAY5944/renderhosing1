import React, { useContext, useState } from 'react'
import { NewContext } from './App'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [data1,setData1]=useContext(NewContext)
    const {u}=useParams()
    const ed=data1[u]
    const [edit,setEdit]=useState(
      {name:'',
       age:'',
       class:''}
    )
    console.log(edit)
    const un=useNavigate()


    function f(e){
    setEdit({...edit,[e.target.name]:e.target.value})
    }
    
    
    function l(ev){
      ev.preventDefault()
      setEdit(data1[u]=edit)
    un("/")
    }
    
  return (
   <div><form  onSubmit={l}>
<label>
  name 
</label><input type='text' placeholder={ed.name} onChange={f} name='name' />
<label>
  age
</label><input  type='text' placeholder={ed.age}  onChange={f} name='age' />
<label>
  qualification
</label><input type='text' placeholder={ed.class}  onChange={f} name='class' />
<button >edit</button>
    </form></div>
  )
}

export default Edit