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
import { Usecontextcart } from "@/context/cartecontext";
import { getComponentTypeModule } from "next/dist/server/lib/app-dir-module";

export default function Item({params}) {

const {addToCart,setOpen}=Usecontextcart();



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

const items = [
  { id: 1, name: 'Double Cheeseburger', description: 'Lorem 1 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f" , price: 10 , quantiti: 1,type:"normal" },
  { id: 2, name: 'Burger  Burger', description: 'Lorem 2 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 20 , quantiti: 1,type:"withanimation"  },
  { id: 3, name: 'Burger burger', description: 'Lorem 3 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 30 , quantiti: 1,type:"withoutanimation" },
  { id: 4, name: 'Burger ', description: 'Lorem 4 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 40 , quantiti: 1,type:"withanimation" },
  { id: 5, name: 'Burger', description: 'Lorem 5 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 50 , quantiti: 1,type:"withoutanimation"  },
  { id: 6, name: 'Burger', description: 'Lorem 5 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 50 , quantiti: 1,type:"normal" },
  { id: 7, name: 'Burger', description: 'Lorem 5 ipsum, dolor sit amet consectetur adipisicing.',custimize: "burger, burger, burger, burger, burger, f", price: 50 , quantiti: 1, type:"withanimation"},
];

const [item,setItem]=useState(items.find((previtem) => previtem.id == params.item ));




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



useEffect(()=>{
  setItem(prevItem => {
    return {
      ...prevItem,
      quantiti: quantity
    };
  });

},[quantity])

  return (
    <>
    {
     item.type === "normal" ?(
        <div className={Styles.item}>
          
          <div className={Styles.circle}>
              <div style={{ backgroundImage: `url(${Batat.src})`}} className={Styles.img}></div>
          </div>
    
          <div className={Styles.information}>
    
            <h1 className={Styles.name}>{item.name}</h1>
            <p className={Styles.desc}>{item.description}</p>
    
            <div className={Styles.order}>
    
            <div className={Styles.price}>{item.price}$</div>
             <div className={Styles.quantity}>
                <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
                <p className={Styles.nb}>{item.quantiti}</p>
                <p className={Styles.plus} onClick={()=> setQuantity(quantity+1)}>+</p>
              </div>
    
    
            </div>
    
             <button onClick={()=> {addToCart(item,item.quantiti),setOpen(0)}} className={Styles.addToCart}>add to cart</button>
    
          </div>
    
        </div>    
     ): 
      item.type === "withoutanimation" ?
        
                <div className={Styles.withoutAnimation}>
            
                  <div className={Styles.circle}>
                  <div style={{ backgroundImage: `url(${Batat.src})`}} className={Styles.img}></div>
                  </div>
            
                  <div className={Styles.information}>
            
                    <div>
                    <h1 className={Styles.name}>{item.name} </h1>
                    <p className={Styles.desc}>{item.description}</p>
                    </div>
                    
                    <div className={Styles.quantites}>
            
                     <p className={Styles.price}>{item.price}$</p>
            
                      <div className={Styles.quantity}>
                         <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
                         <p className={Styles.nb}>{item.quantiti}</p>
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
                            <input type="checkbox" className={Styles.bottom}  defaultChecked={true}   />
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
            
                       <button onClick={()=> {addToCart(item,item.quantiti),setOpen(0)}} className={Styles.addToCart}>add to cart</button>
            
                      
                    </div>
            
                  </div>
            
               </div>
        
      
       :
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
              <h1 className={Styles.name}>{item.name}  </h1>
              <p className={Styles.desc}>{item.description}</p>
            </div>
            
            <div className={Styles.quantites}>
            <p className={Styles.price}>{item.price}$</p>
            
            <div className={Styles.quantity}>
              <p className={Styles.plus} onClick={()=>quantity!=1 && setQuantity(quantity-1)}>-</p>
              <p className={Styles.nb}>{item.quantiti}</p>
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

              <button onClick={()=> {addToCart(item,item.quantiti),setOpen(0)}} className={Styles.addToCart}>add to cart</button>
              
            </div>

            <button   className={Styles.addToCartresponsive} onClick={()=> {addToCart(item,item.quantiti),setOpen(0)}}>add to cart</button>
            
          </div>

        </div>
      

    
    }


    
    </>
  )
}
