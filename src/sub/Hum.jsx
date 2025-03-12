import { useEffect, useState } from "react";
import styles from "../styles/hum.module.css";

export default function Hum() {
  const [toggled, setToggled] = useState(false);

  // Open the menu
  const handleToggleTrue = (e) => {
    e.stopPropagation(); // Prevent the window's click handler from closing it immediately
    setToggled(true);
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setToggled(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggled]);

  return (
    <div className={styles.container}>
      <div
        onClick={handleToggleTrue}
        onMouseDown={(e) => e.stopPropagation()}
        className={!toggled ? styles.hum_container : styles.none}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()} 
        className={toggled ? styles.slide_window : styles.none}
      >
        <div onClick={()=>setToggled(false)} className={styles.close}>
            <div className={styles.first}></div>
            <div className={styles.second}></div>
        </div>
        <p>Our Work</p>
        <p>Order</p>
        <p>About Us</p>
      </div>
    </div>
  );
}
