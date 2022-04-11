import React from 'react'
import { useState, useRef } from 'react';

function DiaryItems({
    onEdit,
    author,
    content,
    emotion,
    created_date,
    id,
    onRemove
}) {

    const [isEdit, setIsEdit] = useState(false); // true가되면 수정중.. false는 수정중 아님
    const toggleIsEdit = () => setIsEdit(!isEdit); // toggleIsEdit의 토글이 호출되는 순간 isEdit의 행동이 반전됨
    // textarea state
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();
    
    const handleRemove = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            onRemove(id)
        }
    };
    const handleQuitEdit = () => {
        setIsEdit(false); //toggleIsEdit()해도 괜찮음 이라고 생각했으나 handleEdit을 작성한 후 왜 toggleIsEdit을 안 사용한지 알겠다. 
        setLocalContent(content);
    };
    
    const handleEdit = () => {
        if(localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }
        if(window.confirm('일기 내용을 수정하겠습니까?')) {
            onEdit(id, localContent);
            toggleIsEdit();
        }
       
    }

    return (
        <div className="DiaryItem">

            <div className="info">
                <span>
                    작성자 : {author} | 감정점수: {emotion}
                </span>
                <br />
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {
                    isEdit
                        ? (<> < textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} /> </>)
                        : (<> {content}</>)
                }
            </div>

            {isEdit ? (
                <> 
                <button onClick={handleQuitEdit}>수정취소</button>
                <button onClick={handleEdit}>수정완료</button></>
            )   :   (
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
            )}


        </div>
    )
}

export default DiaryItems
