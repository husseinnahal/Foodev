"use client"
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Offer from './offer/page';
import { Usecontextoffer } from '@/context/offercontext';
import { useEffect, useState, useMemo } from 'react';

const offers = [
  {id: 0, name: "comboee burger burgeg ", desc: "2 burgerrr from you choice", price: 23, img: "/offer.png", alt: "a"},
  {id: 1, name: "All Slices", desc: "2 burger from you choice", price: 3, img: "/off1.png", alt: "b"},
  {id: 2, name: "Full Combo", desc: "2 burger from you choice", price: 13, img: "/off2.png", alt: "c"},
  {id: 3, name: "Family combo", desc: "2 burger from you choice", price: 2, img: "/off3.png", alt: "r"},
  {id: 4, name: "combo burger", desc: "2 burger from you choice", price: 43, img: "/off4.png", alt: "w"},
  {id: 5, name: "combo burger", desc: "2 burger from you choice", price: 43, img: "/off5.png", alt: "w"},
];

export default function Offers({ params }) {
  const { idoffer } = Usecontextoffer();

  const offer = useMemo(() => {
    if (idoffer === -1) {
      return offers[0];
    } else {
      return offers.find(offer => offer.id === idoffer);
    }
  }, [idoffer]);

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate__animated animate__zoomIn');
    const timeoutId = setTimeout(() => {
      setAnimationClass('');
    }, 800);

    return () => clearTimeout(timeoutId); 
  }, [idoffer]);

  return (
    <div className={styles.offers}>
      <div className={styles.offer}>
        <div className={styles.definition}>
          <h1 className={styles.title}>{offer.name}</h1>
          <p className={styles.desc}>{offer.desc}</p>
          <div className={styles.butons}>
            <p className={styles.price}>{offer.price}$</p>
            <Link href="/menu" className={styles.viewOffers}>view Offer</Link>
          </div>
        </div>
        <div className={styles.circle}>
          {/* <Image 
            src={offer.img} 
            width={440} 
            height={440} 
            alt={offer.alt} 
            className={`${styles.img} ${animationClass}`} 
            priority 
          /> */}
               <div  className={`${styles.img} ${animationClass}`}   style={{backgroundImage:`url(${offer.img})`}}></div>
        </div>
      </div>
      <Offer />
    </div>
  );
}
