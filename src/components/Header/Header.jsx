"use client"
import { Merienda } from "next/font/google";
const mer = Merienda({ subsets: ["latin"],weight: "700"});
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image"
import { useRef, useState } from "react";
import { Usecontextcart } from "@/context/cartecontext";
import Logo from "@/../public/logo.png"
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();
  const isActive = (route) => pathname === route || pathname.startsWith(route);
  const {setOpen,activeClick,setActiveClick}=Usecontextcart();

  
  const res=useRef();
  const bar1=useRef();
  const bar2=useRef();
  const bar3=useRef();


  function bars() {
    if (activeClick) {
      res.current.style.left = "100%";
      bar1.current.style.transform = "rotate(0deg)";
      bar2.current.style.display = "block";
      bar3.current.style.transform = "rotate(0deg)";
      setActiveClick(false);
    } else {
      res.current.style.left = "0";
      bar1.current.style.transform = "rotate(45deg)";
      bar2.current.style.display = "none";
      bar3.current.style.transform = "rotate(-45deg)";
      bar3.current.style.transformOrigin = "top left";
      setActiveClick(true);
    }
  }

  function nextpage(){
    res.current.style.cssText="left:100%";
    bar1.current.style.cssText=" transform: rotate(0deg);"
    bar2.current.style.cssText=" display:block"
    bar3.current.style.cssText=" transform: rotate(0deg)"
   
  }



  return (
    <div className={styles.header}>

      <div className={styles.logo}>
        <Image src={Logo} width={50} height={50} alt="logo" className={styles.image} priority/>
        <h3 className={`${styles.title} ${mer.className}`}>FOODEV</h3>
      </div>

      <div className={styles.responsive} ref={res}>

      <ul className={styles.pages}>
        <li className={styles.page}><Link href='/'       className={styles.topage} style={{ color: pathname=== "/" ? "#6D0000" : "", borderBottom: pathname==="/" ? "3.2px solid #6D0000" : "",}} onClick={nextpage} >HOME</Link></li>
        <li className={styles.page}><Link href='/menu'   className={styles.topage} style={{color:isActive("/menu") ? "#6D0000": "",borderBottom:isActive("/menu") ? "3.2px solid #6D0000": ""}} onClick={nextpage}>MENU</Link></li>
        <li className={styles.page}><Link href='/offers' className={styles.topage} style={{color:isActive("/offers") ? "#6D0000": "",borderBottom: isActive("/offers") ? "3.2px solid #6D0000": ""}} onClick={nextpage}>OFFERS</Link></li>
        <li className={styles.page}><Link href='/locate' className={styles.topage} style={{color:isActive("/locate")? "#6D0000": "",borderBottom:isActive("/locate")? "3.2px solid #6D0000": ""}} onClick={nextpage}>LOCATE US</Link></li>
      </ul>


        <svg onClick={()=> {setOpen(0) ; nextpage()}}   xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512" className={styles.shop}><path className={styles.cart} fill={ pathname === "/" ? "#FFEBD4" : "#FF8F4C"} d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>

     
    </div>

      <div className={styles.click} onClick={bars}>
        <div className={styles.bar1} ref={bar1}></div>
        <div className={styles.bar2} ref={bar2}></div>
        <div className={styles.bar3} ref={bar3}></div>
      </div>

    </div>
  )
}
