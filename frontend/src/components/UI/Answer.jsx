import React, { useState } from "react";

const Answer = ({text,index,id,changeTest}) =>{

    const numbers={
        0:"first",
        1:"second",
        2:"third",
        3:"fouth"
    }

    const i = index
    const num = numbers[i]
    const clickAnswer= (value) =>{
        changeTest(value)
    }

    return (
        <li className="answer-item"> 
            <label for={num} class="answer">
                <input onClick={e=>clickAnswer(e.target.value)} type="radio" name="answer" id={num} value={i}/>
                <span>{text}</span>           
            </label>
        </li>
    )
}

export default Answer