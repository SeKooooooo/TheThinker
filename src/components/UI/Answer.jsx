import React from "react";

const Answer = ({text,index}) =>{
    const numbers={
        0:"firts",
        1:"second",
        2:"third",
        3:"fouth"
    }
    const i = index
    const num = numbers[i]
    return (
        <li className="answer-item"> 
            <label for={num} class="answer">
                <input  type="radio" name="answer" value={num}/>
                <span>{text}</span>           
            </label>
        </li>
    )
}

export default Answer