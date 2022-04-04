import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useState, useRef} from 'react'

// const dummyList = [
//   {
//     id: 1,
//     author: "박소영",
//     content:"하이1",
//     emotion: 5,
//     created_date: new Date().getTime()
//     // 데이트 객체를 그냥 담으면 사용하기 불편함. 왜냐면 나중에 스트링화할거기때문. 따라서 getTime()까지 넣어주자
//   },
//   {
//     id: 2,
//     author: "박소영",
//     content:"하이2",
//     emotion: 3,
//     created_date: new Date().getTime()
    
//   },
//   {
//     id: 3,
//     author: "박소영",
//     content:"하이3",
//     emotion: 2,
//     created_date: new Date().getTime()
    
//   },
//   {
//     id: 4,
//     author: "박소영",
//     content:"하이4",
//     emotion: 1,
//     created_date: new Date().getTime()
    
//   },
// ];


function App() {
  const [data, setData] = useState([]);
  
  const dataId = useRef(0)
  //일기 배열에 새로운 데이터를 추가시키는
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  } 

  return (
    <div className="App">
     <h2>오늘의 일기</h2>
     <DiaryEditor onCreate={onCreate}/>
     <DiaryList  diaryList={data}/>
     
    </div>
  );
}

export default App;
