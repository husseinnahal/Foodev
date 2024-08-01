"use client";
import { createContext, useContext, useState } from "react";

export const Contextcart = createContext();

export default function Cartecontext({ children }) {
    
  const [open, setOpen] = useState(-400);
  const [activeClick, setActiveClick]=useState(false);

      
//  const [cartitems,setCartitems]=useState([]);

//  function quantites(id){
// return cartitems.find((item)=> item.id ===id)?.quantity || 0
//  }

//  function increase(id) {
//   setCartitems((cartitems)=>{
 
//     if (cartitems.find((item)=> item.id === id) == null) {
      
//       return [...cartitems,{id,quantity: 1}]
//     }
//     else{
//       cartitems.map((item)=>{
//         if(item.id===id){
//       return {...item, quantity: item.quantity +1 }
//         }
//         else{
//           return item
//         }

//       })
//     }

//   })
//  }

  return (

    <Contextcart.Provider value={{setOpen,open,setActiveClick,activeClick}}>
      {children}
    </Contextcart.Provider>
  );
}

export const Usecontextcart=()=>{
  return useContext(Contextcart);
} 