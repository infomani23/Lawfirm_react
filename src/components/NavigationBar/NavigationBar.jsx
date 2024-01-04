import React from 'react'
import styles from "./NavigationBar.module.css";
import AppLogo from "../../assets/Vector.png";
import  Instagram from "../../assets/instagram.png";
import  Facebook from "../../assets/facebook.png";
import  Twitter from "../../assets/twitter.png";
import Pintrest from "../../assets/pintrest.png";

function NavigationBar({ footer }) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.applogo}>
            <AppLogo />
            <p>ISSTUDIO</p>
        </div>
        <div className={styles.paraNav}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>

        {
          footer ? 
          (
            <div className={styles.socialApps}>
              <Instagram className={styles.socialIcon} />
              <Facebook className={styles.socialIcon} />
              <Twitter className={styles.socialIcon} />
              <Pintrest className={styles.socialIcon} />
            </div>
          ) :
          (
            <button className={styles.buttonNav}>Contact Now</button>
          )
        }
        

    </div>
  )
}

export default NavigationBar