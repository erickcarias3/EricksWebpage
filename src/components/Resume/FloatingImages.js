import React, { useRef, useState, useEffect } from 'react';
import './Resume.css';

function FloatingImages({images}) {
  const [ballX, setBallX] = useState(-40);
  const [ballY, setBallY] = useState(900);
  const [ballSpeedX, setBallSpeedX] = useState(0.5);
  const [ballSpeedY, setBallSpeedY] = useState(1);

  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ball = ballRef.current;

    const updateBall = () => {
      const containerRect = container.getBoundingClientRect();
      const ballRect = ball.getBoundingClientRect();

      setBallX((prevX) => {
        const newBallX = prevX + ballSpeedX;
        if (newBallX + ballRect.width > containerRect.right - 10) {
          setBallSpeedX(-ballSpeedX);
          return containerRect.right - ballRect.width - 10;
        } else if (newBallX < containerRect.left + 10) {
          setBallSpeedX(-ballSpeedX);
          return containerRect.left + 10;
        } else {
          return newBallX;
        }
      });


      setBallY((prevY) => {
        const newBallY = prevY + ballSpeedY;
        if (newBallY + ballRect.height > containerRect.bottom - 10) {
          setBallSpeedY(-ballSpeedY);
          return containerRect.bottom - ballRect.height - 10;
        } else if (newBallY < containerRect.top + 10) {
          setBallSpeedY(-ballSpeedY);
          return containerRect.top + 10;
        } else {
          return newBallY;
        }
      });
    };

    const animationID = setInterval(updateBall, 10);

    return () => clearInterval(animationID);
  }, [ballSpeedX, ballSpeedY]);

  return (
    <div className="container" ref={containerRef}>
      {images.map((image, index) => (
        <div className="ball" ref={ballRef} style={{ left: `${ballX}px`, top: `${ballY}px` }} >
          <img
            key={index}
            src={image}
            className="floating-image"
            alt="floating"/>
          
        </div>
      ))}
      
    </div>
  );
};

export default FloatingImages;


