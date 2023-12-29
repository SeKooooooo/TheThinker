import React from "react";
import Answer from "./UI/Answer";


const TestForm = ({itemTest,changeTest}) =>{

    const answers=[
        {
            id:1,
            text:"Эверест",
            isTrue: true
        },
        {
            id:2,
            text:"Эльбрус",
            isTrue: false
        },
        {
            id:3,
            text:"Арарат",
            isTrue: false
        },
        {
            id:4,
            text:"Олимп",
            isTrue: false
        }
    ]

    return(
            <ul className="list-answer">
                {
                    answers.map((e,i) => <Answer key={e.id} index={i} answer={e} changeTest={changeTest}/> )
                }
            </ul>
    )
}

export default TestForm