import React, {useState, useEffect} from 'react';


const CounterA = React.memo(({count}) => {
    useEffect(() => {
        console.log('hi')
    })
    return <div>{count}</div>
})

const CounterB = React.memo(({obj}) => { // 즉 obj값만 바뀌면 렌더링 됨.
      useEffect(() => {
        console.log("hi");
      });
    return <div>{obj.count}</div>
})

//공식문서에 있음 
const areEqual = (prevProps, nextProps) => {
    return prevProps.obj.count === nextProps.obj.count
   /*  return true // 이전 프롭스 현재 프롭스가 같다. -> 리렌더링을 일으키지 않게 된다.
    return false // 이전 프롭스 현재 프롭스 다르다 ->  리렌더링을 일으키라
 */
}
const MemoizedCounterB = React.memo(CounterB, areEqual)
// 지금 동작되는걸 보아하니, false여서 계속 마운팅되는것이다.
function Optimaize() {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });
    return (
      <div style={{ padding: 50 }}>
        <div>
          <h2>Counter A</h2>
          <CounterA count={count} />
          <button onClick={() => setCount(count + 1)}>A button</button>
        </div>
        <div>
          <h2>Counter B</h2>
          <MemoizedCounterB obj={obj} />
          <button onClick={() => setObj({ ...obj, count: obj.count + 1 })}>
            B button
          </button>
        </div>
      </div>
    );
}

export default Optimaize




// const TextView = ({text}) => {
//     useEffect(() => {
//         console.log(`update : : Text: ${text}`)
//     })
//     return (
//         <div>
//             {text}
//         </div>
//     )
// }
// const CountView = ({count}) => {
//     useEffect(() => {
//         console.log(`update : : Count: ${count}`)
//     })
//     return (
//         <div>
//             {count}
//         </div>
//     )
// }





// function Optimaize() {
//     const [count, setCount] = useState(1);
//     const [text, setText] = useState("");
//     return (
//         <div style={{padding:50}}>
//             <div>
//                 <h2>count</h2>
//                 <CountView count={count} />
//                 <button onClick={() => setCount(count+1)}>+</button>
//             </div>
//             <div>
//                 <h2>text</h2>
//                 <TextView text={text} />
//                 <input value={text} onChange={(e) => setText(e.target.value)} />
//             </div>
//         </div>
//     )
// }

// export default Optimaize
