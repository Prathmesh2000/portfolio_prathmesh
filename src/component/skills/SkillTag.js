import React from 'react'
import styles from './assets/skills.module.css'


export default function skill(props) {
    return (
        <div className={styles.skill}>
            <span className={styles.header}>
                <img src={props.skill.icon} />
                <div>{props.skill.name}</div>
            </span>
            <div className={styles.body}>
                <div>
                    Rate My Self at {props.skill.name}: {props.skill.rating}/ 10
                </div>
                <p>
                    {props.skill.details}
                </p>
            </div>
        </div>
    )
}
