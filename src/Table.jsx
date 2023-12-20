import React, { useContext, useState } from 'react'
import { NewContext } from './App'
import { Link, useParams } from 'react-router-dom'

function Table() {
    const[data1,setData1]=useContext(NewContext)
 const t=6
 
    
  function f(e) {
    console.log([1,2,3])
  
  const de=data1.filter(item=>item.i!==e.target.id)
  setData1(de)
    }


  return (
    <div>
  <table>
<th>name</th>
<th>
    age
</th>
<th>
    class
</th>
{data1.map((item,indx)=>(


    <tr>
       <td> {item.name}
   </td>
   
   <td> {item.age}
   </td>
   <td> {item.class}
   </td>
    <td>
    <Link to={`/View/${indx}`}><button>view</button></Link>   
    </td>
    <td  id={indx}>
    <button onClick={f}>delete</button>
    </td>
    <td>
    <Link to={`/Edit/${indx}`}><button>edit</button></Link>   
    </td>
    </tr>
))}

  </table>


    </div>
  )
}

export default Table