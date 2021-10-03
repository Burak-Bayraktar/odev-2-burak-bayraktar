import React from 'react'
import styles from './style.module.css'
const TryAgain = ({ text, word, isUserWin }) => {
    return (
        <div class={styles.modalContainer}>
            <div className={styles.modalTryAgain}>
                <div><span className={isUserWin ? styles.win : styles.lose}>{ text }</span> The word was: { word }</div>
                <div className={styles.clickText} onClick={() => window.location.reload(false)}>Click to Reload</div>
            </div>
        </div>
    )
}

export default TryAgain
