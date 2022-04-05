import React from 'react'

function DiaryItems({author, content, emotion, created_date, id, onDelete}) {
 

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
                {content}
            </div>
            <button onClick={() => {onDelete(id)}}>삭제하기</button>
        </div>
    )
}

export default DiaryItems
