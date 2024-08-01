import styles from "./page.module.css";



export default function Locate() {
  return (
    <div className={styles.locate}>

      <h1 className={styles.title}>Faced any problem?</h1>


       <div className={styles.contact}>
      
        <div className={styles.map}>
          <iframe
              className={styles.location}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1583.3659768719924!2d35.482065!3d33.382146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e94a8fb700003%3A0x9dbbcfc571eededb!2sAddict%20Burger!5e1!3m2!1sen!2sus!4v1720094703111!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps location"
            ></iframe>  
            
        </div>
        <div className={styles.problems}>
          
          <div className={styles.details}>

           <p className={styles.paragraph}>fill the form below.</p>          
           <p className={styles.paragraph}>so we can get in touch</p>          
          
          </div>

           <form action="" className={styles.form}>
                 
                <input type="text"  placeholder="name" required minLength={3}  className={styles.information}/>
                <input type="email" placeholder="email" required className={styles.information}/>
                <textarea name="problem" placeholder="what is the problem" min={3} className={styles.problem}></textarea>
                <input type="submit" value="SUBMIT" className={styles.send}/>

           </form>

          <div className={styles.phonenb}>
           <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path fill="#FFEBD4" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <p>+961 70 883 675</p>
          </div>

        </div>

       </div>

    </div>
  )
}
