import React from 'react';
import styles from './styles.module.css'

const Hangman = (props) => {
    function renderHead() {
        return props.body
            ? <circle cx="320" cy="190" r="40" fill="black" />
            : null;
      }
    
      function renderBody() {
        return props.body
          ? <line x1="320" y1="190" x2="320" y2="360" style={styles.character} />
          : null;
      }
    
      function renderLeftArm() {
        return props.leftArm
          ? <line x1="320" y1="260" x2="250" y2="230" style={styles.character} />
          : null;
      }
    
      function renderRightArm() {
        return props.rightArm
          ? <line x1="320" y1="260" x2="390" y2="230" style={styles.character} />
          : null;
      }
    
      function renderLeftLeg() {
        return props.leftLeg
          ? <line x1="320" y1="360" x2="250" y2="450" style={styles.character} />
          : null;
      }
    
      function renderRightLeg() {
        return props.rightLeg
          ? <line x1="320" y1="360" x2="390" y2="450" style={styles.character} />
          : null;
      }
    
    return (
      <svg width="500" height="550">
        <polyline points="400,500 100,500 150,500 150,100 320,100 320,150"
                  style={styles.post} />
        {renderBody()}
        {renderLeftArm()}
        {renderRightArm()}
        {renderLeftLeg()}
        {renderRightLeg()}
        {renderHead()}
      </svg>
    );

}

export default Hangman;