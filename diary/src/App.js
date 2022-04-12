import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef, useEffect, useMemo } from 'react'



function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0)
  //일기 배열에 새로운 데이터를 추가시키는
  const getData = async() => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json()); // json()실행버튼 꼭 넣어줘야함

    const ititialData = res.slice(0,20).map((el) => {
      return {
        author: el.email,
        content: el.body,
        emotion: Math.floor(Math.random()* 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    });

    setData(ititialData)
  };
  
  useEffect(() => {
    getData();
  },[])
 


 
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

  const onRemove = (id) => {
    const RemoveList = data.filter(el => el.id !== id)
    setData(RemoveList)
  }
  const onEdit = (targetId, newContent) => {
    setData(
      data.map(el => el.id === targetId ? {...el, content: newContent} : el)
    )
  }
  const getDiaryAnalysis = useMemo(() => {
    console.log('일기 분석 시작');
    const goodCount = data.filter(el => el.emotion >=3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio}
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis
  // getDiaryAnalysis()이렇게 하면 오류뜸. 왜냐면 변수 getDiartAnalysis는 return값이 있는 '값'이지 '함수'가 아니기 때문
  // useMemo는 값을 받는다.

  return (
    <div className="App">
      <h2>오늘의 일기</h2>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove} />

    </div>
  );
}

export default App;
