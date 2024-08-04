import styles from "./page.module.css"
import Offers from "../../[offers]/page"
import Link from "next/link";


export default function Felttercat({params}) {
    const category = [

        { id: 1, src: '/off4.png',price:10, alt: 'all', name:"all plate for free for  you" },
        { id: 2, src: '/about/mshawi.png',price:20, alt: 'burger', name:"plates" },
        { id: 3, src: '/about/mshawi.png',price:30, alt: 'sand', name: "Sandwitch" },
        { id: 4, src: '/about/mshawi.png',price:40, alt: 'starters' , name: "Plates" },
        { id: 5, src: '/about/mshawi.png',price:50, alt: 'batata', name: "Drinks" },
        { id: 6, src: '/about/mshawi.png',price:60, alt: 'wings' , name: "Pizza"},
        { id: 7, src: '/about/mshawi.png',price:70, alt: 'drink', name: "Starters" },
      ];

    
      
    return (
    <div className={styles.feltercat} >

      <h1 className={styles.title}>Startes</h1>

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
