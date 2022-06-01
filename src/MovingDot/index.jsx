import { useState } from 'react';
import './index.css';

function MovingDot() {
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        const newPosition= {
          x: e.clientX,
          y: e.clientY
        }
        setPosition (newPosition)
      }}
      className="board">
      <div 
        className="dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  )
}

export default MovingDot;