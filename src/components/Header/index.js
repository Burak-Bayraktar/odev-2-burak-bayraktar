import React from 'react'
import style from './style.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <p className={style.headerText}>Hangman Game</p>
            <p className={style.headerText}>You know about the rules. Don't hang the man. :)</p>
        </header>
    )
}

export default Header
