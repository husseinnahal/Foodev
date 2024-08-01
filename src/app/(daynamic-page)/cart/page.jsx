"use client"
import Link from "next/link"
import Style from "./page.module.css"
import Burgers from "@/../public/about/mshawi.png"
import { useState } from "react"
import { Usecontextcart } from "@/context/cartecontext";


export default function Cart() {
const [quantity,setQuantity]=useState(1)
const {open,setOpen} = Usecontextcart(); 
function close(){
  setOpen(-420);
  
 }

  return (
    <div className={Style.cart}>

      <h1> YOUR CART</h1>

      <div className={Style.yourcart}>

        <div className={Style.myitems}>

          <div className={Style.item}>

              <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

              <div className={Style.information}>

                  <h1 className={Style.name}>Burger Buregr</h1>

                  <details>
                    <summary className={Style.summary}> removed ingredients: </summary> 
                    <p className={Style.customise}>burger, burger, burger, eeeeeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeburger, burger, f</p>
                  </details>

                  <p className={Style.price}>90$</p>

              </div>

              <div className={Style.quantity}>
                <p className={Style.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
                <p className={Style.nb}>{quantity}</p>
                <p className={Style.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
              </div>

              <div className={Style.editing}>
                  <p>x</p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="#FF8F4C" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
              </div>

           </div>
          <div className={Style.item}>

              <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

              <div className={Style.information}>

                  <h1 className={Style.name}>Burger Buregr</h1>

                  <details>
                    <summary className={Style.summary}> removed ingredients: </summary> 
                    <p className={Style.customise}>burger, burger, burger, eeeeeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeburger, burger, f</p>
                  </details>

                  <p className={Style.price}>90$</p>

              </div>

              <div className={Style.quantity}>
                <p className={Style.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
                <p className={Style.nb}>{quantity}</p>
                <p className={Style.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
              </div>

              <div className={Style.editing}>
                  <p>x</p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="#FF8F4C" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
              </div>

           </div>
          <div className={Style.item}>

              <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

              <div className={Style.information}>

                  <h1 className={Style.name}>Burger Buregr</h1>

                  <details>
                    <summary className={Style.summary}> removed ingredients: </summary> 
                    <p className={Style.customise}>burger, burger, burger, eeeeeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeburger, burger, f</p>
                  </details>

                  <p className={Style.price}>90$</p>

              </div>

              <div className={Style.quantity}>
                <p className={Style.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
                <p className={Style.nb}>{quantity}</p>
                <p className={Style.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
              </div>

              <div className={Style.editing}>
                  <p>x</p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="#FF8F4C" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
              </div>

           </div>


        </div>


        <div className={Style.details}>

          <h1 className={Style.summary}>Order Summary</h1>

          <div className={Style.total}>
            <h2 className={Style.titles}>Subtotal</h2>
            <p className={Style.price}>150$</p>
          </div>

          <div className={Style.total}>
            <h2 className={Style.titles}>Delivery</h2>
            <p className={Style.price}>3$</p>
          </div>

          <div className={Style.total}>
            <h2 className={Style.titles}>Total</h2>
            <p className={Style.price}>150$</p>
          </div>

          <Link href="/checkout" className={Style.chekcout} onClick={close}>CHECKOUT</Link>

        </div>

      </div>

    </div>
  )
}
