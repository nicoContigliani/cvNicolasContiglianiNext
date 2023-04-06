import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Todo from './todo/index'
import JsonDataBase from './../data.json'
import Layout from '../components/layout/layout';
import Competences from '../components/competences/competences';
import Experience from '../components/experiencce/experience';
import ExperienceFrelancer from '../components/experiencefreelancer/experienceFrelancer'

export default function Home() {
  console.log("🚀 ~ file: index.js:5 ~ JsonDataBase:", JsonDataBase)
  return (

    <Layout>

      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.pdf}>
            


            <div className={styles.sliceLeft}>
              <div className={styles.sliceImg}>
           
              </div>

              <div className={styles.sliceLeft1}>
                <div className={styles.box}>
                  <div className={styles.experienceText}>

                    <div className={styles.title}>
                      <h4>
                        Datos personales
                      </h4>
                    </div>

                    +54 9 261 244 4106 <br />
                    nico.contigliani@gmail.com<br />
                    nico.contigliani<br />
                    nicolas-contigliani<br />
                    https://github.com/nicoContigliani<br />
                    <br />
                  </div>

                </div>
              </div>
              <div className={styles.sliceLeft1}>
                <div className={styles.box}>
                  <div className={styles.experienceText}>

                    <div className={styles.title}>
                      <h4>
                        Habilidades personales
                      </h4>
                    </div>

                    Autodidacta <br />
                    Creativo<br />
                    Organizado<br />
                    Emprendedor<br />
                    <br></br>
                  </div>

                </div>
              </div>
              <div className={styles.sliceLeft1}>
                <div className={styles.box}>
                  <div className={styles.experienceText}>

                    <div className={styles.title}>
                      <h4>
                        Idiomas
                      </h4>
                    </div>
                    Español:Nativo <br />
                    Ingles:A2 <br />
                    <br></br>
                  </div>
                </div>
              </div>
              <div className={styles.sliceLeft1}>
                <div className={styles.box}>
                  <div className={styles.title}>

                    <h4>
                      Educación
                    </h4>
                  </div>
                  <div className={styles.experienceText}>

                    <strong>TÉCNICO UNIVERSITARIO DE REDES DE DATOS Y TELECOMUNICACIONES ITU-
                      UNCUYO</strong> Instituto Tecnológico Universitario (UNCuyo) | 2011 - 2015 | Graduado <br />


                    <strong>TECNICATURA SUPERIOR EN ANÁLISIS DE SISTEMAS Y PROGRAMACIÓN DE
                      SISTEMAS</strong> Inst. de Educación Superior Belgrano | 2016 - 2021 | Graduado<br />

                  </div>
                </div>
              </div>
            </div>
            {/* columna de derecha */}
            <div className={styles.sliceRight}>

              <h1>Nicolás Contigliani</h1>

              <div className={styles.box}>
                <div className={styles.title}>
                  <h4>
                    Sobre Mi

                  </h4>

                </div>
                <span className={styles.span}>
                  Soy un profesional de TI con la capacidad de trabajar en equipo. Estoy trabajando con tecnologías
                  Node.js, React.js y base de datos relacionales como Postgres y MySQL En búsqueda de nuevos desafíos.
                </span>
                <br />

              </div>
              <div className={styles.box}>
                <Competences />
              </div>

              <div className={styles.box}>
                <Experience />


              </div>
              <div className={styles.box}>
                <ExperienceFrelancer />


              </div>
            </div>


          </div>
          <Todo />



        </div>
      </div>
    </Layout>

  )
}