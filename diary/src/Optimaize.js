import React, {useState, useEffect} from 'react';


const CounterA = ({count}) => {
    return <div>{count}</div>
}

const CounterB = ({obj}) => {
    return <div>{obj.count}</div>
}


function Optimaize() {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });
    return (
        <div style={{padding:50}}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
               <h2>Counter B</h2>
               <CounterB obj={obj}/>
               <button onClick={() => setObj({
                   count: obj.count
               })}>B button</button>
            </div>
        </div>
    )
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
