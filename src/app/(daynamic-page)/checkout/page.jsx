"use client"
import Link from 'next/link'
import Styles from './page.module.css'
import { Usecontextcart } from '@/context/cartecontext'

export default function Checkout() {
  const {cart,subtotal} = Usecontextcart(); 


  return (
    <div className={Styles.checkout}>
        
        {/* <div className={Styles.succes}> 
          <p className={Styles.done}>Thank you for purchase</p>
          <Link href={"/menu"} className={Styles.neworder}>New Order</Link>
        </div> */}

        <Link href={"/cart"} className={Styles.tocart}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path className={Styles.svg} fill="#FF8F4C" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          go to cart</Link>


      {cart.length===0 ?
      <p className={Styles.empty}>Your cart is emty</p> :

      <div className={Styles.order}> 
       
        <form className={Styles.inputs}>
          <div className={Styles.name}>
          <input type="text" placeholder='first name' className={Styles.input} />
          <input type="text" placeholder='last name' className={Styles.input} />
          </div>
          <input type="text" placeholder='Town / City' className={Styles.input} />
          <input type="number" placeholder='Phone Number' className={Styles.input} />
          <input type="email" placeholder='email' className={Styles.input} />
          <input type="submit"  className={Styles.send} name="send"/>
        </form>

        <div className={Styles.details}>

            <h1 className={Styles.summary}>Your Order</h1>

            <div className={Styles.items}>

            {cart.map((item)=>
              <div className={Styles.item} key={item.id}> 
                <p className={Styles.name}>{item.name} x {item.quantiti}</p>
                <p className={Styles.price}>{item.quantiti*item.price}$</p>
              </div>
            )}

            </div>

            <div className={Styles.total}>
              <h2 className={Styles.titles}>Subtotal</h2>
              <p className={Styles.price}>{subtotal}$</p>
            </div>

            <div className={Styles.total}>
              <h2 className={Styles.titles}>Delivery</h2>
              <p className={Styles.price}>3$</p>
            </div>

            <div className={Styles.total}>
              <h2 className={Styles.titles}>Total</h2>
              <p className={Styles.price}>{subtotal+3}$</p>
            </div>


            <Link href="/cart" className={Styles.chekcout}>ORDER</Link>

        </div>

      </div> 
      }

    </div>
  )
}
