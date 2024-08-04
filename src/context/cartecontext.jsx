"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const Contextcart = createContext();

export default function Cartecontext({ children }) {
    
  const [open, setOpen] = useState(-400);
  const [activeClick, setActiveClick]=useState(false);

      
  const [cart, setCart] = useState([]);

  function addToCart(item,quant) {
    setCart(prevItems => {


      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {

        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantiti: cartItem.quantiti + quant }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantiti: quant }];
      }
    });
  }

  
  function removeFromCart(itemId){
    setCart((prevCart) => prevCart.filter(product => product.id !== itemId));
  };
const [subtotal,setSubtotal]=useState(0);

let newsubtotal=0
useEffect(()=>{
  cart.map((items)=>
   
    newsubtotal=newsubtotal+(items.price*items.quantiti) 
  )
  setSubtotal(newsubtotal)
 },[cart])

  return (

    <Contextcart.Provider value={{setOpen,open,setActiveClick,activeClick,cart,setCart,addToCart,removeFromCart,subtotal}}>
      {children}
    </Contextcart.Provider>
  );
}

export const Usecontextcart=()=>{
  return useContext(Contextcart);
} 