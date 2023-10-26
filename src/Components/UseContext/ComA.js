import React, { useContext } from 'react'
import {MyContext} from './UseContext'

const ComA = () => {
  const data = useContext(MyContext);
  console.log(data)
  

  return (
    <div>
      {data.name} <br/>
      {data.Location}
      {
        data.Hobbies.map((h)=>{
          return  <h1>My Hobbies are : {h}</h1>
        })
      }
    </div>
  )
}

export default ComA