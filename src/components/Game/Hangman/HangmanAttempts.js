import React from 'react';
import Hangman from './Hangman';

const Attempts = ({attemptsLeft}) => {
  let props = {
    body: attemptsLeft <= 4,
    leftArm: attemptsLeft <= 3,
    rightArm: attemptsLeft <= 2,
    leftLeg: attemptsLeft <= 1,
    rightLeg: attemptsLeft === 0,
  };

  return <Hangman {...props} />
};

export default Attempts;