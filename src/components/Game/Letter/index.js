import React from 'react'
import styles from './style.module.css'

/*
    Renders alphabet
*/
const Letter = ({ letters, selectLetter }) => {

    return (
        <div className={styles.letterContainer}>
            {
                letters.map((letter, index) =>
                    <span key={index} className={`${styles.letter} ${letter.isClicked ? `${styles.clicked}` : ""}`} onClick={() => selectLetter(letter)}>
                        {letter.value}
                    </span>
                )
            }
        </div>
    )
}

export default Letter
