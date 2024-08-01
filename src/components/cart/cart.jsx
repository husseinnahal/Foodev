"use client"
import Style from "./page.module.css";
import Burgers from "@/../public/about/burger.png"
import Link from "next/link";
import { useRef } from "react";
import { Usecontextcart } from "@/context/cartecontext";

export default function Cart() {
const closes=useRef();

const item = [

  { id: 0,  name:"Burger"    ,
     items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"byu"} ,{id:7 , name:"Burgeqr" , src: '/about/center.png', alt:"byeu"},{id:2 , name:"Burgers" , src: '/about/center.png', alt:"byqu"} ,{id:3 , name:"Burgeqr" , src: '/about/center.png', alt:"byeu"} ,{id:4 , name:"Burgeqr" , src: '/about/center.png', alt:"byFeu"}] },
  { id: 1,name:"Burger" , 
     items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bjyu"},{id:2 , name:"Burgser" , src: '/about/center.png', alt:"byqu"} ,{id:3 , name:"Burgeqr" , src: '/about/center.png', alt:"bu"}   ,{id:5 , name:"Burgeqr" , src: '/about/center.png', alt:"byDeu"}]  },
  { id: 2,  name: "Starters" ,
     items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bkyu"},{id:2 , name:"Burgser" , src: '/about/center.png', alt:"byqu"} ,{id:3 , name:"Burgqer" , src: '/about/center.png', alt:"byue"} ,{id:5 , name:"Burgeqr" , src: '/about/center.png', alt:"byCeu"}]  },
  { id: 3,  name: "Sandwitch", 
    items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bnyu"},{id:2 , name:"Burgser" , src: '/about/center.png', alt:"byuq"} ,{id:3 , name:"Burgqer" , src: '/about/center.png', alt:"byeu"} ,{id:4 , name:"Burgeqr" , src: '/about/center.png', alt:"byDeu"}]  },
  { id: 4,  name: "Plates"   , 
    items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bmu"} ,{id:2 , name:"Bursger" , src: '/about/center.png', alt:"byuq"} ,{id:3 , name:"Burgqer" , src: '/about/center.png', alt:"ebyu"} ,{id:5 , name:"Burgeqr" , src: '/about/center.png', alt:"byDeu"}] },
  { id: 5,  name: "Drinks"   ,
     items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bku"} ,{id:2 , name:"Burgser" , src: '/about/center.png', alt:"byqu"} ,{id:3 , name:"Burgqer" , src: '/about/center.png', alt:"byeu"} ,{id:4 , name:"Burgeqr" , src: '/about/center.png', alt:"byDeu"}] },
  { id: 6,  name: "Pizza"  ,   
    items:[{id:1 , name:"Burger" , src: '/about/center.png', alt:"bpu"} ,{id:2 , name:"Burgser" , src: '/about/center.png', alt:"byuq"} ,{id:3 , name:"Burgeqr" , src: '/about/center.png', alt:"byeu"} ,{id:4 , name:"Burgeqr" , src: '/about/center.png', alt:"byeDu"}] },
];

function close(){
 setOpen(-420);
 
}



const {open,setOpen} = Usecontextcart(); 

  return (
    <div className={Style.outcart} style={{ right:`${open}px` }} ref={closes}>
       
       <div className={Style.whatisthis}>

            <h1 className={Style.title}>Your Bag</h1>
            <p className={Style.close}   onClick={close}>X</p>

       </div>
    

       <div className={Style.item}>

        <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

        <div className={Style.information}>

            <h1 className={Style.name}>Burger Buregr</h1>

            <details>
              <summary className={Style.summary}> removed ingredients: </summary>
              <p className={Style.customise}>burger, burger, burger, burger, burger, f</p>
            </details>

            <p className={Style.price}>1x90$</p>

        </div>

        <div className={Style.editing}>
            <p>x</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#FF8F4C" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
        </div>
       
       </div>
       <div className={Style.item}>

        <div className={Style.img} style={{backgroundImage:`url(${Burgers.src})`}}></div>

        <div className={Style.information}>

            <h1 className={Style.name}>Burger Buregr</h1>

            <details>
              <summary className={Style.summary}> removed ingredients: </summary>
              <p className={Style.customise}>burger, burger, burger, burger, burger, f</p>
            </details>

            <p className={Style.price}>1x90$</p>

        </div>

        <div className={Style.editing}>
            <p>x</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#FF8F4C" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
        </div>
       
       </div>
      
      <div className={Style.buttons}>

      <div className={Style.subtotal}>
        <p>Subtotal: </p>
        <p>40$</p>
      </div>
      <Link href="/cart" className={Style.viewcart} onClick={close}>VIEW CART</Link>
      <Link href="/checkout" className={Style.checkout} onClick={close}>CHECKOUT</Link>
      </div>
    </div>
  )
}
