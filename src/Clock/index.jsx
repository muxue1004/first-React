import { useEffect, useState } from 'react';

// 篇幅关系，Clock组件内部的小组件也写在了一起
function ClockWithInputBox({ time }) {
  return (
    <>
      {/* 显示当前 time 和一个 input 框 */}
      <h1>{time}</h1>
      <input />
    </>
  );
}

// 这是个自定义的 Hook 函数
function useTime() {
  // 顶层定义了一个初始值是当前时间，名为 time 的 state 变量
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      // 每隔1秒 time 重新计算
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock() {
  const time = useTime();
  return (
    // 通过父组件向子组件传递格式化后的 prop time 的值
    <ClockWithInputBox time={time.toLocaleTimeString()} />
  );
}

export default Clock;