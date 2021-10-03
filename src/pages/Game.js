import React, { useState, useEffect } from 'react'
import Letter from '../components/Game/Letter'
import Word from '../components/Game/Word'
import axios from 'axios'
import styles from '../pages/style.module.css'
// import Hangman from '../components/Game/Hangman/Hangman'
import TryAgain from '../components/TryAgain'
import HangmanAttempts from '../components/Game/Hangman/HangmanAttempts'
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
        axios.get('https://random-word-api.herokuapp.com/word?number=1').then((res) => {
            const { data } = res;
            const _word = Array.from(data[0]).map(letter => {
                return {
                    value: letter,
                    isSelected: false
                }
            })
            console.log(data[0]);
            setWord(_word);
            setWordStr(data[0]);
        })        
    }, []);

    const selectLetter = (letter) => {
        setWord(() => word.map((w) => w.value === letter.value ? { ...w, isSelected: true} : w));    
        setLetters(() => letters.map((l) =>  l.value === letter.value ? {...l, isClicked: true} : l));
        
        const result = checkIfSelectedLetterExist(word, letter);

        console.log(word)
        const _isUserWin = checkWin(word);

        if(_isUserWin) {
            setIsUserWin(_isUserWin);
        }
        if(!result.length) {
            setCount(count-1);
        }
    }

    
    return <div className={styles.gameContainer}>
            <Letter letters={letters} selectLetter={selectLetter} />
            <div className={styles.gameBody}>
                <div className={styles.gameBodyLeft}>
                    <Word word={word} />
                    <div className={styles.count}>
                        Remaining: {count}
                    </div>
                </div>
                <div className={styles.gameBodyRight}>
                </div>
                <HangmanAttempts attemptsLeft={count} />
            </div>
            {!count && <TryAgain word={wordStr} text="Try Again!" />}
            {isUserWin && alert("Congrats")}
            </div>
    
}

export default Game
