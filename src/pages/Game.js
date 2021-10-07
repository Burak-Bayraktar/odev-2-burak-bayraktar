import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../pages/style.module.css'
import Letter from '../components/Game/Letter'
import Word from '../components/Game/Word'
import TryAgain from '../components/TryAgain'
import HangmanAttempts from '../components/Game/Hangman/HangmanAttempts'
import Header from '../components/Header'
import { checkIfSelectedLetterExist, checkWin } from '../utils/utils'

const Game = () => {
    const [word, setWord] = useState([]);
    const [wordStr, setWordStr] = useState('');
    const [count, setCount] = useState(5);
    const [isUserWin, setIsUserWin] = useState('');
    const [letters, setLetters] = useState(() => 
                                    Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => {
                                        return {
                                            value: letter,
                                            isClicked: false,
                                        }
                                    }))

    useEffect(() => {
        axios.get(process.env.REACT_APP_API).then((res) => {
            const { data } = res;
            const _word = Array.from(data[0]).map(letter => {
                return {
                    value: letter,
                    isSelected: false
                }
            })

            setWord(_word);
            setWordStr(data[0]);
        })        
    }, []);

    const selectLetter = (letter) => {
        setWord(() => word.map((w) => w.value === letter.value ? { ...w, isSelected: true} : w));    
        setLetters(() => letters.map((l) =>  l.value === letter.value ? {...l, isClicked: true} : l));
        
        const selectedLetters = checkIfSelectedLetterExist(word, letter);

        const _isUserWin = checkWin(word, selectedLetters);

        if(_isUserWin) {
            setIsUserWin(_isUserWin);
        }
        if(!selectedLetters.length) {
            setCount(count-1);
        }
    }

    const renderComponent = () => {
        if (!count) {
            return <TryAgain isUserWin={false} word={wordStr} text="Game Over!" />
        }
        
        if (isUserWin) {
            return <TryAgain isUserWin={true} word={wordStr} text="Congrats!" />
        }

        return (
            <>
            <Header />
            <div className={styles.gameContainer}>
                <Letter letters={letters} selectLetter={selectLetter} />
                <div className={styles.gameBody}>
                    <div className={styles.gameBodyLeft}>
                        {word.length ? <Word word={word} /> : <div>Loading...</div>} 
                        <div className={styles.count}>
                            Remaining: {count}
                        </div>
                    </div>
                    <div className={styles.gameBodyRight}>
                        <HangmanAttempts attemptsLeft={count} />
                    </div>
                </div>
            </div>
            </>
        )
    }
     
    return renderComponent();
}

export default Game
