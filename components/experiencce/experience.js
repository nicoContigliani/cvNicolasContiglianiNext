import styles from '../../styles/Home.module.css';
import ItemExperience from '../itemExperience/itemExperience';



export default function Experience() {
    return (
        <div>
            <div className={styles.title}>
                <h4>
                    Expericencia Laboral
                </h4>
            </div>
            < ItemExperience />
            < ItemExperience />
            < ItemExperience />


        </div>
    )
}
