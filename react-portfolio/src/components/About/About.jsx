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
                        <img src={getImageUrl("about/programmerIcon.png")} alt="Programmer icon" />
                        <div classname = {styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>I'm a software developer with experience in building efficient and optimized code.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/projectCoordinatorIcon.png")} alt="Project Coordinator icon" />
                        <div classname = {styles.aboutItemText}>
                            <h3>Project Coordinator</h3>
                            <p>I have experience leading a team to ensure deliverables are completed and ready on time.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/graduationIcon.png")} alt="Graduation icon" />
                        <div classname = {styles.aboutItemText}>
                        <h3>Computer Science Graduate</h3>
                            <p>I'm a recent graduate from Penn State University with a bachelors degree in computer science.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>;
};