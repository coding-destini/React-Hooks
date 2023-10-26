import React, { useCallback, useState } from 'react'
import CompC from './CompC';

const UseCallback = () => {
    const [num, setnum] = useState(0);
    const [count,setcount] = useState(0);

    const Learning = useCallback(()=>{

    },[ ])

  return (
    <div>UseCallback
        <br />
        <h2>{num}</h2>
        <button onClick={()=>setnum(num+2)}>Add</button>
        <CompC Learning={Learning} />
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>Count</button>
    </div>
  )
}

export default UseCallback