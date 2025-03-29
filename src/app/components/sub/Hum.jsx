"use client"

import { useEffect, useState } from "react";
import styles from "../../../../styles/hum.module.css";
/* import { Link } from '../../../i18n/navigation'; */
import Link from "next/link";
export default function Hum() {
  const [toggled, setToggled] = useState(false);

  // Open the menu
  const handleToggleTrue = (e) => {
    e.stopPropagation(); // Prevent the window's click handler from closing it immediately
    setToggled(true);
  };

  // Close the menu when clicking outside
  const handleWindowClick = () => {
    if (toggled) {
      setToggled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggled]);

  return (
    <div className={styles.container}>
      {/* Hamburger Icon */}
      <div
        onClick={handleToggleTrue}
        onMouseDown={(e) => e.stopPropagation()}
        className={!toggled ? styles.hum_container : styles.none}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sliding Menu */}
      <div
        onClick={(e) => e.stopPropagation()} 
        className={toggled ? styles.slide_window : styles.none}
      >
        <div onClick={() => setToggled(false)} className={styles.wrapper}>
          <div className={styles.arrow}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        
        {/* Menu Links */}
        <Link href="#" className={styles.menuItem}>Our Work</Link>
        <Link href="/order" className={styles.menuItem}>Order</Link>
        <Link href="/about" className={styles.menuItem}>About Us</Link>
      </div>
    </div>
  );
}
