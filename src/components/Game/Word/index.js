import React from 'react'
import styles from './style.module.css'

/*
    Renders letters of the word
*/
const Word = ({ word }) => {

    return (
        <div className={styles.wordLetterContainer}>
        {
            Array.from(word)?.map((letter, index) => {
                return letter === ' ' ? '&nbsp' : <span key={index} className={styles.wordLetter}>{letter.isSelected ? letter.value : ''}</span>
            })
        }
        </div>
    )
}

export default Word
