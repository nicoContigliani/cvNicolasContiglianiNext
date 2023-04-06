import styles from '../../styles/Home.module.css'

export default function Competences() {
  return (
    <>
      <h4 className={styles.title} >
        Competences
      </h4>
      <div className={styles.rows}>

        <div className={styles.front}>
          <h5 className={styles.titleCompetencesIn}>
            Front End

          </h5>
          <div>React.js (Hooks) y Redux</div>
          <div>Next.js</div>
          <div>JavaScript ES6/ typescript</div>
          <div>Material UI /Bootstrap</div>
          <div>Metro4/ Frame motions y CSS</div>
          <div>Figma</div>

        </div>
        <div className={styles.back}>
          <h5 className={styles.titleCompetencesIn}>
            Back End

          </h5>
          <div>Node.js</div>
          <div>Nest.js</div>
          <div>Express.js</div>
          <div>Docker</div>
          <div>Composer</div>
          <div>Postman</div>
        </div>
        <div className={styles.dataBase}>
          <h5 className={styles.titleCompetencesIn}>
            Base de Datos

          </h5>
          <div>Postgres</div>
          <div>MySql</div>
          <div>Mongo</div>
          <div>Sequelize</div>
          <div>TypeOrm</div>
          <div>Mongose</div>
        </div>
        <div className={styles.dataBase}>
          <h5 className={styles.titleCompetencesIn}>
            Mobile

          </h5>
          <div>React Native Expo</div>
  
        </div>
        <div className={styles.dataBase}>
          <h5 className={styles.titleCompetencesIn}>
           Metodología

          </h5>
          <div>Scrum</div>
          <div>Agile</div>
          <div>Trello</div>
          <div>Jira</div>
        </div>
        <div className={styles.dataBase}>
          <h5 className={styles.titleCompetencesIn}>
            Control de Versiones

          </h5>
          <div>Github</div>
          <div>Gitlab</div>
          <div>BigBucket</div>
      
        </div>
        {/* <div className={styles.dataBase}>
          <h5 className={styles.titleCompetencesIn}>
           Redes de Datos y S.O.

          </h5>
          <div>Cisco</div>
          <div>GU/Linux</div>
          <div>Windows Server</div>
      
        </div> */}
      </div>

    </>

  )
}
