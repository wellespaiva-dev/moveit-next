import styles from '../styles/components/experienceBar.module.css'

export function ExperiencieBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width: '50%'}}/>

                <span className={styles.currentExperience}  style={{left: '50%'}}>300 px</span>
            </div>
            <span>600 px</span>
        </header>
    );
}