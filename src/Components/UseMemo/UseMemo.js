import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    
    const [add, setAdd] = useState(0);
    const [sub,setSub] = useState(50);

       const multiply=useMemo(function multiplication(){
        console.log("**************")
        return add*10
       },[add])

    
  return (
    <div>
   <h1>Multiply :  {multiply}</h1>
        <h1>Add : {add}</h1>
        <button onClick={()=>{setAdd(add+1)}}>ADD</button>
        <h1>Sub : {sub}</h1>
        <button onClick={()=>{setSub(sub-2)}}>SUB</button>
    </div>
  )
}

export default UseMemo