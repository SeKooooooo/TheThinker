import React from "react";
import Test from "./UI/Test";

const ListTest = ({tests}) => {
    if(!tests.length){
        return  <div className="error">Тесты не найдены</div>
    }
    return (
        <ul className="list-tests">
            {
                tests.map(e => <Test key={e.id} topic={e.topic} teacher={e.teacher} id={e.id}/>)
            }
        </ul>
    )
}

export default ListTest