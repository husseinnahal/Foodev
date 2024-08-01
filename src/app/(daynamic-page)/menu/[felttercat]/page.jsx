import styles from "./page.module.css"
import Offers from "../../[offers]/page"
import Link from "next/link";


export default function Felttercat({params}) {
    const category = [

        { id: 0, src: '/off4.png', alt: 'all', name:"all plate for free for  you" },
        { id: 1, src: '/about/mshawi.png', alt: 'burger', name:"plates" },
        { id: 2, src: '/about/mshawi.png', alt: 'drink', name: "Starters" },
        { id: 3, src: '/about/mshawi.png', alt: 'sand', name: "Sandwitch" },
        { id: 4, src: '/about/mshawi.png', alt: 'starters' , name: "Plates" },
        { id: 5, src: '/about/mshawi.png', alt: 'batata', name: "Drinks" },
        { id: 6, src: '/about/mshawi.png', alt: 'wings' , name: "Pizza"},
      ];

    
      
    return (
    <div className={styles.feltercat} >

      <h1 className={styles.title}>Startes</h1>

       <div className={styles.items}>

        {category.map((item)=>
            <Link href={`/menu/${params.felttercat}/${item.id}`} className={styles.item} key={item.id}> 

                <div style={{backgroundImage:`url(${item.src})`}} className={styles.img}></div>
                <p className={styles.name}>{item.name}</p>
                
            </Link>
        )}
        
       </div>
       <Offers/>

    </div>
  )
}
