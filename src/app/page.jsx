import styles from "./page.module.css";
import Locate from "./(static-page)/locate/page";
import Landingpage from "./(static-page)/landingpage/page";



export default function Home() {
  return (
    <main className={styles.main}>
      
      <Landingpage/>
      <Locate/>
      
    </main>
  );
}
