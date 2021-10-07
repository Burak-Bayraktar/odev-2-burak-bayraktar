export const checkIfSelectedLetterExist = (word, letter) => {
   return word.filter((w) => {
        return w.value === letter.value
    });
}

export const checkWin = (word, letters) => {
    const knownLetters = word.filter((w) => {
        return w.isSelected === true;
    })
    return knownLetters.length + letters.length === word.length ? true : false;
}