import React from "react";
import Answer from "./UI/Answer";

const TestForm = ({answers}) =>{
    return(
        <form>
            <ul className="list-answer">
                {
                    answers.map((e,i) => <Answer text={e} index={i}/> )
                }
            </ul>
        </form>
    )
}

export default TestForm