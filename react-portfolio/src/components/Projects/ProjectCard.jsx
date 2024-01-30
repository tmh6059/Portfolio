import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Projectcard.module.css"

export const ProjectCard = ( { project : {title, imageSrc, description, skills, demo, source} } ) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} 
            alt={`Image of ${title}`} className={styles.Image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{skills.map((skill, id) => {
            return (
            <li className={styles.skill} key={id}>{skill}</li>
            )})}
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={source}>Source</a>
        </div>
    </div>
  )
}
