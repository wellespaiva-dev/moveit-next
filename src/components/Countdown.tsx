import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){

    const { minutos, seconds, active, hasFinished, startCountdown, resetCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutos).padStart(2,'0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? (
                    <button
                        disabled
                        className={styles.countdownButton} 
                    >
                        Ciclo encerrado
                        <img src='icons/check_circle.svg' alt='check'/>
                    </button>
            ): (
                <>
                    {
                        active ? 
                        (
                            <button
                                onClick={resetCountdown}
                                type='button' 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            >
                                Abandonar ciclo
                                <img src='icons/close.svg' alt='close'/> 
                            </button>

                        ): (
                            <button
                                onClick={startCountdown}
                                type='button' 
                                className={styles.countdownButton} 
                            >
                                Inicar ciclo
                            </button>
                        )
                    }
                </>
            )}
        </div>
    );
}