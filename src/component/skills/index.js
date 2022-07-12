import React from 'react'
import styles from './assets/skills.module.css'
import reactIcon from './assets/icons/React-icon.png'
import nodeIcon from './assets/icons/Node-icon.png'
import reduxIcon from './assets/icons/Redux-icon.png'
import CSSIcon from './assets/icons/Css-icon.png'
import PostgresIcon from './assets/icons/Postgres-icon.png'
import JavaIcon from './assets/icons/Java-icon.png'
import SkillTag from './SkillTag'

export default function index() {
    const skills = [{
        id: "reactjs",
        icon: reactIcon,
        name: "React JS",
        rating: 9.2,
        details: "14 months of relevant experience in React JS worked on several Project, was lead frontend devloper at one of project which is SaaS based e-commerce appliaction. Single handedly done many features. Skilled in both functional and class component. Can efficiently read and write documentaion."
    },
    {
        id: "nodejs",
        icon: nodeIcon,
        name: "Node JS",
        rating: 8.4,
        details: "14 months of relevant experience in Node JS worked on several Project as important part of the backend team. Good at writting Scripts and Rest Apis."
    },
    {
        id: "redux",
        icon: reduxIcon,
        name: "Redux",
        rating: 9,
        details: "Know how to build stable and efficent redux architecture. Worked with redux and on journey of upkilling myself in building more efficent structures."
    },
    {
        id: "css",
        icon: CSSIcon,
        name: "CSS",
        rating: 9.5,
        details: "Good at styling components understand the properties of CSS and know how to apply them in rightful manner lead a project which is frontend UI heavy."
    },
    {
        id: "java",
        icon: JavaIcon,
        name: "Java Core",
        rating: 8.5,
        details: "Worked as a Android developer with Java language. Good at core Java. Well versed with OOPS concepts."
    },
    {
        id: "postgres",
        icon: PostgresIcon,
        name: "Postgres",
        rating: 9,
        details: "Good at Database management, having professional work experience of 14 months with postgres. Worked with ORM Sequlize. Good at build database architecture and writting efficent query is key to sucess and I am proficent at it."
    }]
    return (
        <div className={styles.wrapper}>
            {
                skills.map((skill, index) => (
                    <SkillTag
                        index={index}
                        key={skill.id}
                        skill={skill}
                        details={skill.details} />
                ))
            }
        </div>
    )
}
