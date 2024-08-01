"use client"

import { createContext, useContext, useState } from "react"

export const Contextoffer=createContext()

export default function Offercontext({children}) {
    const [idoffer,setIdoffer]=useState(-1);

  return (
    <div>
      <Contextoffer.Provider value={{idoffer,setIdoffer}}>
        {children}
      </Contextoffer.Provider>  
    </div>
  )
}

export const Usecontextoffer=()=>{
    return useContext(Contextoffer);
  } 