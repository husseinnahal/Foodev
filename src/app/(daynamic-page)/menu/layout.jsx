import styles from "./page.module.css"
import Category from "./category/page"
import Offercontext from "@/context/offercontext"



export default function Menulayout({children}) {
  return (
     <div className={styles.layout} >
      <Offercontext>
       <div className={styles.animation}>
        <div className={styles.features}>
          <p>.</p>
          <p className={styles.feature}>Free delivery</p>
          <p>.</p>
          <p className={styles.feature}>Expulsion 24h</p>
          <p>.</p>
          
        </div>
        </div>
          <Category/>

        {children}
        

       </Offercontext>
      </div>
     )
   }

