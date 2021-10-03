import React from 'react'
import styles from './style.module.css'
import gameOver from '../../assets/img/game-over.png'
import congrats from '../../assets/img/congrats.png'

const TryAgain = ({ text, word, isUserWin }) => {
    return (
        <div class={styles.modalContainer}>
            <div className={styles.modalTryAgain}>
                <div className="img">
                    <img style={{width: '150px'}} src={isUserWin ? congrats : gameOver} alt="img" />
                </div>
                <div><span className={isUserWin ? styles.win : styles.lose}>{ text }</span> The word was: { word }</div>
                <div className={styles.clickText} onClick={() => window.location.reload(false)}>Click to Reload</div>
            </div>
        </div>
    )
}

export default TryAgain
