import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.clock}>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock;
