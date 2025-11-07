import { useState } from "react";
import styles from "./Clock.module.css"

const Clock = () => {
    let time = new Date().toLocaleString();
    const [CurrentTime, SetCurrentTime] = useState(time);

    const updateDate = () => {
        let time = new Date().toLocaleString();
        SetCurrentTime(time); 
   }

   setInterval(updateDate, 1000);

   return (

   <div className={styles.clock}>
     <h1 className={styles.hour}>{CurrentTime}</h1>
   </div>
   )

}

export default Clock;