import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Sitting with laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div classname = {styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Filler Text.Filler Text.Filler Text.Filler Text.Filler Text.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div classname = {styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Filler Text.Filler Text.Filler Text.Filler Text.Filler Text.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div classname = {styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Filler Text.Filler Text.Filler Text.Filler Text.Filler Text.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>;
};