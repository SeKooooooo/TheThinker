import React from "react";
import Answer from "./UI/Answer";


const TestForm = ({answers,id,changeTest}) =>{
    const numbers={
        0:"first",
        1:"second",
        2:"third",
        3:"fouth"
    }

    return(
            <ul className="list-answer">
                {
                    answers.map((e,i) => <Answer key={i} text={e} index={i} id={id} changeTest={changeTest}/> )
                }
            </ul>
    )
}

export default TestForm