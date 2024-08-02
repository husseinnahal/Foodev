"use client"
import Styles from "./page.module.css";
import Link from "next/link";
import Batat from "@/../public/off3.png"
import Upper from "@/../public/upper.png"
import Lahme from "@/../public/lahme.png"
import Down from "@/../public/5beztahet.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";

export default function Item() {

const names =[ 
  {id:1,name:"Fresh tomatoes  "},
  {id:2,name:"mayo"},
  {id:3,name:"Ketchup"},
  {id:4,name:"mayo"},
  {id:5,name:"Fresh tomatoes"},
  {id:6,name:"Fresh tomatoes"},
  {id:7,name:"Fresh tomatoes"},
  {id:8,name:"Fresh tomatoes"},
  {id:9,name:"Fresh tomatoes"},
  {id:10,name:"Fresh tomatoes"},

]

const sections = [
  { id: 1, src: '/onion.png', alt: 'tomato' },
  { id: 2, src: '/kabis.png', alt: 'tomato' },
  { id: 3, src: '/tomato.png', alt: 'tomato' },
  { id: 4, src: '/cheez.png', alt: 'cheese' },
  { id: 5, src: '/cheez.png', alt: '5as' },
  { id: 6, src: '/lahme.png', alt: 'meat' },
  { id: 7, src: '/5as.png', alt: '5as' },
  { id: 8, src: '/5as.png', alt: '5as' },
  { id: 9, src: '/cheez.png', alt: '5as' },
  { id: 10, src: '/cheez.png', alt: '5as' },

];


const checked=useRef({});

const [idforchecked,setIdforchecked]=useState(-1);
const [whatisvalue,SetWhatisvalue]=useState();
const [quantity,setQuantity]=useState(1)

useEffect(() => {
  if (idforchecked!=-1) {
    const item = checked.current[idforchecked];
    if (whatisvalue==false) {
      item.style.marginLeft = '-700px';
      setTimeout(() => {
        item.style.display = 'none';
      }, 500);

    }
    else{
      item.style.display = 'block';
      setTimeout(() => {
        item.style.marginLeft = '0px';
      }, 10);
      setTimeout(() => {
        item.style.display = 'block';
      }, 400);
    }

  }
}, [idforchecked,whatisvalue]);


  return (
    // <div className={Styles.item}>
      
    //   <div className={Styles.circle}>
    //       <div style={{ backgroundImage: `url(${Batat.src})`}} className={Styles.img}></div>
    //   </div>

    //   <div className={Styles.information}>

    //     <h1 className={Styles.name}>Double Cheeseburger doubleee</h1>
    //     <p className={Styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

    //     <div className={Styles.order}>

    //     <div className={Styles.price}>10$</div>
    //       <div className={Styles.quantity}>
    //       <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
    //       <p className={Styles.nb}>{quantity}</p>
    //       <p className={Styles.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
    //       </div>


    //     </div>

    //         <Link href="/menu"  className={Styles.addToCart}>add to cart</Link>
    //   </div>

    // </div>
    

  //   <div className={Styles.withoutAnimation}>

  //     <div className={Styles.circle}>
  //     <div style={{ backgroundImage: `url(${Batat.src})`}} className={Styles.img}></div>
  //     </div>

  //     <div className={Styles.information}>

  //       <div>
  //       <h1 className={Styles.name}>Double Cheeseburger </h1>
  //       <p className={Styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
  //       </div>
        
  //       <div className={Styles.quantites}>

  //        <p className={Styles.price}>10$</p>

  //         <div className={Styles.quantity}>
  //           <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
  //           <p className={Styles.nb}>{quantity}</p>
  //           <p className={Styles.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
  //         </div>

  //        </div>

  //       <div className={Styles.customise}> 

  //         <h1 className={Styles.namecustomise}>Customise your Item: </h1>

  //         <div className={Styles.overfloww}>

  //         {names.map((nm)=>
  //         <div className={Styles.removeitem} key={nm.id}>

  //           <div className={Styles.checkbox}>
  //             <label className={Styles.toggleButton}>
  //               <input type="checkbox" className={Styles.bottom}  defaultChecked={true}   />
  //               <div className={Styles.imgs}>
  //                 <svg viewBox="0 0 44 44" className={Styles.svg}>
  //                   <path transform="translate(-2.000000, -2.000000)" d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"></path>
  //                 </svg>
  //               </div>
  //             </label>
  //           </div>
            
  //           <p className={Styles.namee}>{nm.name}</p>

  //         </div>

  //          )}
  //         </div>

  //         <Link href="/menu"  className={Styles.addToCart}>add to cart</Link>
          
  //       </div>

  //     </div>

  //  </div>

      <div className={Styles.withAnimation}>


         <div className={Styles.burgeranimation}>

              <div className={Styles.img} style={{backgroundImage:`url(${Upper.src})`}}> </div>

               {sections.map((section) => ( 

                <div className={Styles.img} style={{backgroundImage:`url(${section.src})`}} key={section.id} 
               
               ref={(el) => (checked.current[section.id] = el)}

               > </div>

              ))}

            
            <div className={Styles.img} style={{backgroundImage:`url(${Lahme.src})`}}> </div>
            <div className={Styles.img} style={{backgroundImage:`url(${Down.src})`}}> </div>


         </div>
          
           <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView:3,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            modules={[Pagination]}
            className={Styles.swiper}
          >

          {names.map((nm)=>
              <SwiperSlide className={Styles.slide} key={nm.id}>

                  <div className={Styles.checkbox}>
                <label className={Styles.toggleButton}>
                  <input type="checkbox" className={Styles.bottom} defaultChecked={true}   
                  onChange={(e) => {setIdforchecked(nm.id); 
                    SetWhatisvalue(e.target.checked);                  
                    }} />

                  <div className={Styles.imgs}>
                    <svg viewBox="0 0 44 44" className={Styles.svg}>
                      <path transform="translate(-2.000000, -2.000000)" d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"></path>
                    </svg>
                  </div>
                </label>
                  </div>
              
                  <p className={Styles.namee}>{nm.name}</p>

            </SwiperSlide>
            )}
          </Swiper>

        <div className={Styles.information}>

          <div>
            <h1 className={Styles.name}>Double Cheeseburger  </h1>
            <p className={Styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          
          <div className={Styles.quantites}>
          <p className={Styles.price}>10$</p>
          
          <div className={Styles.quantity}>
            <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
            <p className={Styles.nb}>{quantity}</p>
            <p className={Styles.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
          </div>

          </div>
          
          <div className={Styles.customise}> 

            <h1 className={Styles.namecustomise}>Customise your Item: </h1>

            <div className={Styles.overfloww}>

            {names.map((nm)=>
            <div className={Styles.removeitem} key={nm.id}>

              <div className={Styles.checkbox}>
                <label className={Styles.toggleButton}>
                  <input type="checkbox" className={Styles.bottom} defaultChecked={true}   
                  onChange={(e) => {setIdforchecked(nm.id); 
                    SetWhatisvalue(e.target.checked);                  
                    }} />

                  <div className={Styles.imgs}>
                    <svg viewBox="0 0 44 44" className={Styles.svg}>
                      <path transform="translate(-2.000000, -2.000000)" d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"></path>
                    </svg>
                  </div>
                </label>
              </div>
              
              <p className={Styles.namee}>{nm.name}</p>

            </div>

            )}

            </div>

            <Link href="/menu"  className={Styles.addToCart}>add to cart</Link>
            
          </div>

          <Link href="/menu"  className={Styles.addToCartresponsive}>add to cart</Link>
           
        </div>

    </div>

  )
}
