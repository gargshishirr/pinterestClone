import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shishir Garg</h1>
        <p className={styles.description}>
          A Final year Computer Science student at Delhi Technological University,
          passionate about crafting innovative software solutions to address
          societal challenges and improving the daily lives of people. Currently
          I am refining my skills in Full Stack Development. I'm actively
          seeking internship opportunities and connections within the tech
          industry.
        </p>
        <a
          href="https://drive.google.com/file/d/1s2BG52Thgxuz6uA54qMmyhRoPQHB5m4M/view?usp=drive_link"
          target="_blank"
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/IMG_4599.png")}
        alt="Hero Image of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
