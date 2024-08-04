"use client"
import Link from "next/link"
import Style from "./page.module.css"
import Burgers from "@/../public/about/mshawi.png"
import { Usecontextcart } from "@/context/cartecontext";

function Item({ cart }) {

  const {setCart,removeFromCart} = Usecontextcart(); 


  function decrease(id) {
    setCart(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantiti > 1
          ? { ...item, quantiti: item.quantiti - 1 }
          : item
      )
    );
  }
  function increase(id) {
    setCart(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantiti: item.quantiti + 1 } :item
      )
    );
  }

  return (
    <div className={Style.item} >

    <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

    <div className={Style.information}>

        <h1 className={Style.name}>{cart.name}</h1>

        <details>
          <summary className={Style.summary}> removed ingredients: </summary> 
          <p className={Style.customise}>{cart.custimize}</p>
        </details>

        <p className={Style.price}>{cart.price}$</p>

    </div>

    <div className={Style.quantity}>
      <p className={Style.plus} onClick={()=> decrease(cart.id)}>-</p>
      <p className={Style.nb}>{cart.quantiti}</p>
      <p className={Style.plus} onClick={()=> increase(cart.id)}>+</p>
    </div>

    <div className={Style.editing}>
        <p onClick={() => removeFromCart(cart.id)}>x</p>
    </div>

    </div>
  );
}


export default function Cart() {

const {setOpen,cart,subtotal} = Usecontextcart(); 
function close(){
  setOpen(-420);
 }



  return (
    <div className={Style.cart}>

      <h1> YOUR CART</h1>

          {cart.length === 0 ? 
           <p className={Style.empty}>Your cart is empty</p> :
            <div className={Style.yourcart}>

              <div className={Style.myitems}>
                
                {cart.map((cart)=>
                <Item key={cart.id} cart={cart} />
                )}
                
              </div>


              <div className={Style.details}>

                <h1 className={Style.summary}>Order Summary</h1>

                <div className={Style.total}>
                  <h2 className={Style.titles}>Subtotal</h2>
                  <p className={Style.price}>{subtotal}$</p>
                </div>

                <div className={Style.total}>
                  <h2 className={Style.titles}>Delivery</h2>
                  <p className={Style.price}>3$</p>
                </div>

                <div className={Style.total}>
                  <h2 className={Style.titles}>Total</h2>
                  <p className={Style.price}>{subtotal+3}$</p>
                </div>

                <Link href="/checkout" className={Style.chekcout} onClick={close}>CHECKOUT</Link>

              </div>

            </div>
     }
    </div>
  )
}
