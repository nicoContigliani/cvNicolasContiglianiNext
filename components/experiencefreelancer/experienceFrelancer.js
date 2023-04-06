import React from 'react'
import styles from '../../styles/Home.module.css'
export default function ExperienceFrelancer() {
    return (
        <div>
                <div className={styles.title}>
                    <h4>
                        Proyectos
                    </h4>
                </div>
            <div className={styles.experience}>


                <div className={styles.title}>
                    Sistemas Seguros - ABRIL 2020
                    <span className={styles.experienceText} >
                        (Desarrollador FullStack)
                    </span>
                </div>

                <span className={styles.experienceText} >
                    El Sistema fue desarrollado para una cadena de empresas de seguro con el fin de fidelizar clientes.
                    Se encuentra desarrollado en Node MVC con una base Postgres que funciona como una api en
                    conexión con la vista en React.js (bootstrap,material UI y Metro 4) por medio de rutas Express.js.
                    Además se usa api Wattsapp y nodemal para los recordatorios.
                </span>

            </div>


        </div>
    )
}
