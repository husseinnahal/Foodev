"use client"
import Style from "./page.module.css";
import Burgers from "@/../public/about/burger.png"
import Link from "next/link";
import { useRef } from "react";
import { Usecontextcart } from "@/context/cartecontext";

export default function Cart() {
const closes=useRef();


function close(){
 setOpen(-420);
 
}



const {open,setOpen,cart,removeFromCart,subtotal} = Usecontextcart(); 


  return (
    <div className={Style.outcart} style={{ right:`${open}px` }} ref={closes}>
       
       <div className={Style.whatisthis}>

            <h1 className={Style.title}>Your Bag</h1>
            <p className={Style.close}   onClick={close}>X</p>

       </div>
    

      {cart.length===0 ?
       <p className={Style.emty}>Your cart is empty</p> :
       
      <>
      {cart.map((cart)=>
       <div className={Style.item} key={cart.id}>

        <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

        <div className={Style.information}>

            <h1 className={Style.name}>{cart.name}</h1>

            <details>
              <summary className={Style.summary}> removed ingredients: </summary>
              <p className={Style.customise}>{cart.custimize}</p>
            </details>

            <p className={Style.price}>{cart.quantiti}x{cart.price}$</p>

        </div>

        <div className={Style.editing}>
            <p onClick={() => removeFromCart(cart.id)}>x</p>
        </div>
       
       </div>
      )}
      <div className={Style.buttons}>

      <div className={Style.subtotal}>
        <p>Subtotal: </p>
        <p>{subtotal}$</p>
      </div>
      <Link href="/cart" className={Style.viewcart} onClick={close}>VIEW CART</Link>
      <Link href="/checkout" className={Style.checkout} onClick={close}>CHECKOUT</Link>
      </div>
      </>
      }
    </div>
  )
}
