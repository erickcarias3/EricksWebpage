import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Typewriter = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(texts[currentTextIndex].substring(0, i));
        i++;
        if (i > texts[currentTextIndex].length) {
          clearInterval(interval);
          setTimeout(() => {
            let j = texts[currentTextIndex].length;
            const deleteInterval = setInterval(() => {
              setDisplayText((displayText) => displayText.substring(0, j - 1));
              j--;
              if (j < 0) {
                clearInterval(deleteInterval);
                if (currentTextIndex === texts.length - 1) {
                  setCurrentTextIndex(0);
                } else {
                  setCurrentTextIndex(currentTextIndex + 1);
                }
              }
            }, 95);
          }, 1000);
        }
      }, 120);
      return () => clearInterval(interval);
    }, [currentTextIndex, texts]);
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor((showCursor) => !showCursor);
      }, 500);
      return () => clearInterval(cursorInterval);
    }, []);
  
    return (
        <Typography sx={{fontWeight: 'light', fontFamily: "sans-seric", letterSpacing: 5, }} component="h1" variant="h4" color="inherit" gutterBottom>
            {displayText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </Typography>
    );
  };

export default Typewriter;
