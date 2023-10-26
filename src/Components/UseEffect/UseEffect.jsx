import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UseEffect = () => {
    const [url,setUrl] = useState("");
    const [count, setcount] = useState(0);
    const [show,setshow] = useState(false);

    useEffect(()=>{
     axios.get('https://api.thecatapi.com/v1/images/search').then((res)=>{
        setUrl(res.data[0].url)
        console.log("my data",res.data)
     })
       
    
    },[count])
  return (
    <div>
        <h1>UseEffect</h1>
        <button 
        onClick={()=>{
            setcount(count+1)
        }}
        >ADD</button>
        {count}

        <button  onClick={()=>{
            setshow(!show)
        }}>
            {show?"Hide":"Show"}
        </button>
        {
            show?<h1>Akash</h1>:" "
        }
        <img src={url} alt="" />
    </div>

  )
}

export default UseEffect