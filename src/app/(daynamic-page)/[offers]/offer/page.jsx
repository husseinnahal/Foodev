"use client"
import styles from "../page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Usecontextoffer } from "@/context/offercontext";

export default function Offer () {
  const offers=[
    {id:0,name:"combo burger ",img:"/offer.png",alt:"a"},
    {id:1,name:"All Slices",img:"/off1.png" , alt:"b"},
    {id:2,name:"Full Combo",img:"/off2.png", alt:"c"},
    {id:3,name:"Family combo",img:"/off3.png", alt:"r"},
    {id:4,name:"combo burger",img:"/off4.png", alt:"w"},
    {id:5,name:"combo burger",img:"/off5.png", alt:"w"},
   ]
   
  const {setIdoffer}=Usecontextoffer();


  return (
    <div className={styles.swiperoffer} >

     <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          630: {
            slidesPerView:3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >

        { offers.map((off) =>
          <SwiperSlide className={styles.slide} key={off.id} onClick={()=> setIdoffer(off.id)}>

            <div className={styles.scaleOfImg} style={{backgroundImage:`url(${off.img})`}}></div>
            <p className={styles.paragraph}>{off.name}</p>

        </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}
