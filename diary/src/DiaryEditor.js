import React from 'react'
import { useRef, useState } from 'react';

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef(); // useRef라는 함수를 가져옴 React.MutableRefObject<undefined>에 접근
    // React.MutableRefObject는 html의 dom요소에 접근하게 해줌 => 원하는 태그에 접근할 수 있다.
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    })


    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = () => {
        console.log(state);
        if (state.author.length < 1) {
            authorInput.current.focus();
            console.log(authorInput.current)
            // useRef로 생성한 객체(authorInput)는 현재 가리키는 값(current)에 focus하는 값을 말한다.
            return;
        }

        if (state.content.length < 1) {
            contentInput.current.focus();
            return;
        }
        alert("저장 성공")
        onCreate(state.author, state.content, state.emotion)
        setState({
            author: "",
            content: "",
            emotion: 1
        })
    };
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    name='author' // event는 event.target.value 뿐만 아니라 e.target.name까지도 나타낼 수 있다.
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name='content'
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <select name='emotion' value={state.emotion} onChange={handleChangeState} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>

    )
};
export default DiaryEditor


