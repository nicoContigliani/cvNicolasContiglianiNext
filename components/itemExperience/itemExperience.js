import React from 'react'
import styles from '../../styles/Home.module.css';




export default function ItemExperience() {
    return (
        <div className={styles.experience}>
            <div className={styles.title}>
                OPENDEV - ABRIL 2022
                <span className={styles.experienceText} >
                    (Desarrollador FullStack)
                </span>
            </div>

            <span className={styles.experienceText} >
                (Proyecto Sistema de organización de documentación y mensajería para Contadores y abogados
                REACT/NODE
            </span>
        </div>
    )
}
