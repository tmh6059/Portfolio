import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Tim</h1>
        <p className={styles.description}>
            I'm a recent Penn State graduate with experience using Python, C, C++, SQL, Java, React, and NodeJS. <br /> <br/>
            Feel free to reach out at any time if you would like to learn more!
        </p>
        <a href='mailto:timhend2001@gmail.com' className={styles.contactBtn}> Contact Me</a>
        </div>
        <img src = {getImageUrl("hero/heroImage.png")}
            alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};