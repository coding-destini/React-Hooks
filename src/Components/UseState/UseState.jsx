import React, { useState } from 'react'

const UseState = () => {
    const [input,setInput] = useState("");
    console.log(input)
  return (
    <div>
        <h1>UseState</h1>
        <input type="text" placeholder='Write your name' onChange={
            (e)=>setInput(e.target.value)
        }  />
        {input}
    </div>
  )
}

export default UseState