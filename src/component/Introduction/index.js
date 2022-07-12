import React from 'react'
import styles from './assets/Introduction.module.css'

export default function index() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <div></div>
                <div>{"Agrawal".toUpperCase()}</div>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.greetingContainer}>
                    <div>Hello</div>
                    <div></div>
                </div>
                <div className={styles.nameContainer}>{"I am Prathmesh Agrawal".toUpperCase()}</div>
            </div>
        </div>
    )
}
