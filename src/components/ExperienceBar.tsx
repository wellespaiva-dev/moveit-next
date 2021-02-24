import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ContextChallenges';
import styles from '../styles/components/experienceBar.module.css'

export function ExperiencieBar(){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}/>

                <span className={styles.currentExperience}  style={{left: `${percentToNextLevel}%`}}>{currentExperience} px</span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}