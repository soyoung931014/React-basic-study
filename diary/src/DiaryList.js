import DiaryItems from "./DiaryItems";

const DiaryList = ({diaryList}) => {
    console.log(diaryList);

    return( 
    <div className="DiaryList">
        <h2>일기리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map(el => (
                <DiaryItems key={el.id} {...el}/>
         
            ))}
        </div>

    </div>
    )
   
}
DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList