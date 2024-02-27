import { useState, useRef, useEffect } from 'react';
import {Switch, FormControlLabel} from '@mui/material';
import "./Pong.css"

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Ball({  index, containerRef, image, isMoving }) {
  const [position, setPosition] = useState({
    x: getRandomNumber(1, 800),
    y: getRandomNumber(1, 800),

  });
  const [velocity, setVelocity] = useState({
    x: getRandomNumber(1, 3),
    y: getRandomNumber(0.5,3.5),
  });
  const ballRef = useRef(null);

  useEffect(() => {
    let animationID;
    if (isMoving) {
      animationID = requestAnimationFrame(moveBall);
    }

    return () => {
      cancelAnimationFrame(animationID);
    };
  });

  const moveBall = () => {
    const ball = ballRef.current;
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const ballWidth = ball.clientWidth;
    const ballHeight = ball.clientHeight;
    const nextPosition = {
      x: position.x + velocity.x,
      y: position.y + velocity.y,
    };
    const nextVelocity = {
      x: velocity.x,
      y: velocity.y,
    };

    if (nextPosition.x + ballWidth > containerWidth) {
      nextPosition.x = containerWidth - ballWidth;
      nextVelocity.x = -velocity.x;
    } else if (nextPosition.x < 0) {
      nextPosition.x = 0;
      nextVelocity.x = -velocity.x;
    }

    if (nextPosition.y + ballHeight > containerHeight) {
      nextPosition.y = containerHeight - ballHeight;
      nextVelocity.y = -velocity.y;
    } else if (nextPosition.y < 0) {
      nextPosition.y = 0;
      nextVelocity.y = -velocity.y;
    }

    setPosition(nextPosition);
    setVelocity(nextVelocity);
  };

  const style = {
    left: position.x + "px",
    top: position.y + "px",
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    width: "80px",
    height: "80px",
    position: "absolute",
  };

  return (
    <div className="ball2" style={style} ref={ballRef}/>
  );
}


function Pong({ballImages}) {
  const containerRef = useRef(null);
  const [isMoving, setIsMoving] = useState(true);


  return (
    <div>
      <div className="switchContainer" >
          <Switch
            checked={isMoving}
            onChange={() => setIsMoving(!isMoving)}
            name="Toggle"
            color="secondary"
          />
      </div>
    <div className="container2" ref={containerRef}>
      {ballImages.map((image, index) => (
        <Ball
          index={index + 1}
          containerRef={containerRef}
          image={image}
          key={index}
          isMoving={isMoving}
        />
      ))}
    </div>
    </div>
  );
}

export default Pong;
