import React, { useReducer, useState } from 'react'

const reducer =(state,action)=>{
  switch(action.type){
    case "Add":
      return {...state,result:parseInt(state.input1) + parseInt(state.input2)};
    case "Subtract" :
    return {...state,result:state.input1 - state.input2}
    case "Multiply" :
      return {...state,result:state.input1 * state.input2}
    case "Divide" : 
    return {...state,result:state.input1/state.input2}

    default :
    return state;

  }
}


const UseReducer = () => {
  const [state,dispatch] = useReducer(reducer,{input1:0,input2 : 0,result:0});


  return (
    <div>
        <h1>Calculater Using useReducer</h1>
       <input type="number"  
       onChange={(e)=>{
        state.input1 = e.target.value
       }}
       />
        <input type="number"   onChange={(e)=>{
        state.input2 = e.target.value
       }}  />
        <button onClick={()=>{
          dispatch({type:"Add"})
        }
        } > ADD</button>

<button onClick={()=>{
          dispatch({type:"Subtract"})
        }
        } > Subtract</button>

<button onClick={()=>{
          dispatch({type:"Multiply"})
        }
        } > Multiply</button>

<button onClick={()=>{
          dispatch({type:"Divide"})
        }
        } > Divide</button>
      <h1>
        Result :  {state.result}
      </h1>
    </div>

  )
}

export default UseReducer