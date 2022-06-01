import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

function ReverseList() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    // 复制原数组的新备份
    const nextList = [...list];
    // 反转新数组
    nextList.reverse();
    // 替换原数组
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ReverseList;