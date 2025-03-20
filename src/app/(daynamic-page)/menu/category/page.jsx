"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./page.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Food from "@/../public/menu/food.png"

export default function Category() {
  
  const category = [
    { id: 1, src: '/footer/Logo.png', alt: 'burger', name:"pizza" },
    { id: 2, src: '/footer/Logo.png', alt: 'drink', name: "Burgers" },
    { id: 3, src: '/footer/Logo.png', alt: 'sand', name: "beef burger" },
    { id: 4, src: '/footer/Logo.png', alt: 'starters' , name: "salad" },
    { id: 5, src: '/footer/Logo.png', alt: 'batata', name: "chiken burger" },
    { id: 6, src: '/footer/Logo.png', alt: 'winges' , name: "jumbo burger"},
    { id: 7, src: '/footer/Logo.png', alt: 'winfgs' , name: "sandwiches"},
    { id: 8, src: '/footer/Logo.png', alt: 'winggs' , name: "plates"},
    { id: 9, src: '/footer/Logo.png', alt: 'wingbs' , name: "hotdog and bites"},
  ];

  const path=usePathname();
  function isActive(pathname) {
    return pathname===path || path.startsWith(pathname);
  }

  

  return (
    <div className={styles.category}> 
      
      <Swiper
        slidesPerView={2.2}
        spaceBetween={7}

        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          950: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slides} >
          <Link className={styles.links} href={`/menu`} style={{backgroundColor: path==="/menu"? "#6D0000": ""}}>
            <div style={{backgroundImage:`url(${Food.src})`}}  className={styles.img}></div>
            <p className={styles.name}>ALL</p>
          </Link>
        </SwiperSlide>

        {category.map((cat) =>
        <SwiperSlide className={styles.slides} key={cat.id}>
          <Link className={styles.links} style={{ backgroundColor: isActive(`/menu/${cat.id}`) ? "#6D0000": ""}} href={`/menu/${cat.id}`}>
            <div style={{backgroundImage:`url(${cat.src})`}}  className={styles.img}></div>
            <p className={styles.name}>{cat.name}</p>
          </Link>
        </SwiperSlide>

        )}
      </Swiper>

    </div>
  )
}
