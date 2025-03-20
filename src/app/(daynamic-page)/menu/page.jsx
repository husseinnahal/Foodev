"use client"
import styles from "./page.module.css"
import Offers from "../[offers]/page"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from "next/link";



export default function Menu() {
  const item = [

    { id: 1,name:"Burger" , 
       items:[{id:1 ,price:10, name:"Burger" , src: '/about/burger.png', alt:"bjyu"},{id:2 ,price:20, name:"Burgser" , src: '/offer.png', alt:"byqu"} ,{id:3 ,price:30, name:"Burgeqr" , src: '/off2.png', alt:"bu"}   ,{id:5 ,price:50, name:"Burgeqr" , src: '/burger.png', alt:"byDeu"},{id:5 ,price:50, name:"big Burgeqr" , src: '/off5.png', alt:"byDeu"}]  },
    { id: 0,  name:"Pizza"    ,
       items:[{id:1 ,price:10, name:"large pizza" , src: '/off4.png', alt:"byu"} ,{id:5 ,price:50, name:"pizza" , src: '/off3.png', alt:"byeu"},{id:2 ,price:20, name:"small pizza" , src: '/about/pizza.png', alt:"byqu"} ,{id:3 ,price:10, name:"large pizza" , src: '/off4.png', alt:"byu"},{id:4 ,price:15, name:"pizza" , src: '/off3.png', alt:"byu"}] },
    { id: 2,  name: "Starters" ,
       items:[{id:1 ,price:10, name:"sitos" , src: '/about/btata.png', alt:"bkyu"},{id:2 ,price:20, name:"fahita" , src: '/about/sandwitch.png', alt:"byqu"} ,{id:3 ,price:30, name:"Grill" , src: '/about/mshawi.png', alt:"byue"} ,{id:5 ,price:50, name:"Burgeqr" , src: '/about/burger.png', alt:"byCeu"}]  },
       { id:3 ,  name: "Sandwiches" ,
        items:[{id:1 ,price:10, name:"sitos" , src: '/about/btata.png', alt:"bkyu"},{id:2 ,price:20, name:"fahita" , src: '/about/sandwitch.png', alt:"byqu"} ,{id:3 ,price:30, name:"Burgqer" , src: '/about/mshawi.png', alt:"byue"} ,{id:5 ,price:50, name:"Burgeqr" , src: '/about/burger.png', alt:"byCeu"}]  },
     ];


  return (
    <div className={styles.menu}>
      
     <div className={styles.products}>

        {item.map((it) =>

        <div key={it.id} className={styles.category}>
          
          <h2 className={styles.name }>{it.name}</h2>
        
          <svg width={2056} className={styles.svg} height={75} viewBox="0 0 2056 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 75.7797L11.4875 67.1405C83.5985 7.73806 182.113 -8.22379 269.292 25.3697L310.123 41.1036C368.168 63.4709 432.325 64.1998 490.864 43.157L552.057 21.1601C603.461 2.68224 659.39 0.92946 711.85 16.1523L845.072 54.8107C892.27 68.5069 942.392 68.4917 989.582 54.7668L1135.1 12.4453C1179.47 -0.461457 1226.5 -1.25867 1271.29 10.1364L1460.89 58.3754C1505.68 69.7704 1552.71 68.9732 1597.08 56.0664L1735.73 15.743C1787.2 0.772042 1842.05 2.14236 1892.72 19.6649L2054.96 75.7797" stroke="#FF8F4C" strokeWidth="3" strokeDasharray="6 6"/>
          </svg> 

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={true}
            modules={ [Navigation]}
          className={styles.swiper}
        >
          
          
              
          {it.items.map((im) =>
          <SwiperSlide className={styles.slides} key={im.id}>
            <Link href={`/menu/${it.name}/${im.id}`} className={styles.links}>
            
             <div style={{backgroundImage:`url(${im.src})`}} className={styles.img}></div>
             <p className={styles.name}>{im.name}</p>
             <p className={styles.price}>{im.price}$</p>
           </Link>
          </SwiperSlide>
          )}
          
        </Swiper>
        </div>
      )}

      </div>

      <Offers/>

    </div>
  )
}
