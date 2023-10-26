import React, { useEffect, useLayoutEffect, useRef } from 'react'


const UseLayoutEffect = () => {
    const inputRef = useRef(null);


    useLayoutEffect(()=>{
     console.log(inputRef.current.value)
    },[])
    useEffect(()=>{
        inputRef.current.value = "Hey Akash";
    },[])
  return (
    <div>
       <input type="text" ref={inputRef} value="Akash" />
    </div>
  )
}

export default UseLayoutEffect