// import { useEffect, useState } from "react";

// async function queryData() {
//   const data = await new Promise<number>((resolve) => {
//     setTimeout(() => {
//       resolve(666);
//     }, 2000);
//   })
//   return data;
// }

// function App() {
//   const [num, setNum] = useState(1);

//   useEffect(() => {
//     queryData().then(data => {
//       setNum(data);
//     })
//   }, []);//第二个参数为什么传空数组呢？这个数组叫做依赖数组，
//   // react 是根据它有没有变来决定是否执行 effect 函数的，如果没传则每次都执行。

//   return (
//     <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('effect');
    const timer = setInterval(() => {
      setNum(num + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };  
  }, [num]);

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>;
}

export default App;
