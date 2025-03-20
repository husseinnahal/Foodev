import styles from "./page.module.css"
import Offers from "../../[offers]/page"
import Link from "next/link";


export default function Felttercat({params}) {
    const category = [
        { id: 2, src: '/about/pizza.png',price:20, alt: 'burger', name:"pizza" },
        { id: 3, src: '/off4.png',price:30, alt: 'sand', name: "large pizza" },
        { id: 4, src: '/off3.png',price:40, alt: 'starters' , name: "small pizza" },
        // { id: 5, src: '/about/mshawi.png',price:50, alt: 'batata', name: "Drinks" },
        // { id: 6, src: '/about/mshawi.png',price:60, alt: 'wings' , name: "Pizza"},
        // { id: 7, src: '/about/mshawi.png',price:70, alt: 'drink', name: "Starters" },
      ];

    
      
    return (
    <div className={styles.feltercat} >

      <h1 className={styles.title}>Pizza</h1>

       <div className={styles.items}>

        {category.map((item)=>
            <Link href={`/menu/${params.felttercat}/${item.id}`} className={styles.item} key={item.id}> 

                <div style={{backgroundImage:`url(${item.src})`}} className={styles.img}></div>
                {/* <Image src={item.src} width={200} height={150} alt={item.alt} priority/> */}
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>{item.price}$</p>
            </Link>
        )}
        
       </div>
       <Offers/>

    </div>
  )
}
