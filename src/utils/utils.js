export const checkIfSelectedLetterExist = (word, letter) => {
   return word.filter((w) => {
        return w.value === letter.value
    });
}

export const checkWin = (word) => {
    const knownLetters = word.filter((w) => {
        return w.isSelected === true;
    })
    debugger
    return knownLetters.length + 1 === word.length ? true : false;
}