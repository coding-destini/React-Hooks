import React, { useRef, useState } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);
    const [name, setName] = useState("");
    const showname =()=>{
        inputRef.current.focus();
       setName(inputRef.current.value)
       inputRef.current.value = " ";
    }
  return (
    <div>
        <input type="text" ref={inputRef}  />
        <button onClick={
            showname
        } >print name</button>
        <h1>{name}</h1>
    </div>
  )
}

export default UseRef