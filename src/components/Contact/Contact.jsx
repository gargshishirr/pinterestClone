import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:gargshishirr@gmail.com">gargshishirr@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/shishir-garg-86a308209/">www.linkedin.com/in/shishir-garg-86a308209/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="https://github.com/gargshishirr">github.com/gargshishirr</a>
            </li>
        </ul>
    </footer>
  )
}
