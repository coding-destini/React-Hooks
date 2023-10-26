import React, { createContext } from 'react'
import Main from './Main';

export const MyContext = createContext(null); 

const UseContext = () => {
  return (
    <MyContext.Provider  value={{
        name :"Akash Shah", Location : "Rishikesh",
        Hobbies :["Gaming","Coding","Roaming"]
    }
    }  >
    <div>
        <Main />
    </div>
    </MyContext.Provider>
   
  )
}

export default UseContext