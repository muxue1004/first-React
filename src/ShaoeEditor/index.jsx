import { useState } from 'react';
import './index.css';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'circle') {
        // 返回一个下移了 50 像素的新圆
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
      
      return shape;
    });
    // 用新数组重新渲染组件
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          className = 'shape'
          style={{
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            left: shape.x,
            top: shape.y,
          }}
        />
      ))}
    </>
  );
}

export default ShapeEditor;