import { useState } from 'react';
import ClickBtn from '../ClickBtn';

function Counter() {
  const [ clickTimes, setClickTimes ] = useState(0);
  function handleClick(event) {
    event.preventDefault();
    setClickTimes( clickTimes + 1)
  }
  return (
    <>
      <p>Counter: { clickTimes }</p>
      <ClickBtn onClick={handleClick}/>
    </>
  );
}

export default Counter;