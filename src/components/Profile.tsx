
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src='http://github.com/wellespaiva-dev.png' alt='Welles Paiva'/>
            <div>
                <strong>Welles Paiva</strong>
                <p>
                    <img src='icons/level.svg' alt='Level'/>
                    Level 1
                </p>
            </div>
        </div>
    )
}