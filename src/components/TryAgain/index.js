import React from 'react'
import styles from './style.module.css'
const TryAgain = ({ text, word }) => {
    return (
        <div class={styles.modalContainer}>
            <div className={styles.modalTryAgain}>
                <div>{ text } The word was: { word }</div>
                <div onClick={() => window.location.reload(false)}>Click to Reload</div>
            </div>
        </div>
    )
}

export default TryAgain
