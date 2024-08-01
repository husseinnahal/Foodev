"use client"

import { useEffect, useRef } from "react";

export default function Totop() {
    const toup =useRef();

    const up = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      }

      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 450) {
              toup.current.style.right="-23px"
        } else {
            toup.current.style.right="-100px"

          }
        });
      });

  return (

    <button className="totop" onClick={up} ref={toup} >^</button>

  )
}
