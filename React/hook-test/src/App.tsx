import { useState } from "react";

function App() {
  const [num, setNum] = useState(() => {
    const num2 = 2 + 3; //这里就是给num当初始值的
    return  num2
});

  return (
    <div onClick={() => setNum(num + 1)}>{num}</div>//num+1 就是给操作初始值的内容
  );
//  ✅ useState(() => {...}) 适用于初始值计算较复杂的情况。
// ✅ setNum(num + 1) 可行，但 setNum(prev => prev + 1) 更稳定。
// 回调在 React 中，状态更新可能是异步的，并且 React 会对多个状态更新进行批量处理。
// 如果你直接使用闭包中捕获的旧状态来计算新状态，可能会导致意外的行为。
// 使用回调函数 setNum(prev => prev + 1) 可以确保每次状态更新都使用最新的状态值。
}

export default App;
