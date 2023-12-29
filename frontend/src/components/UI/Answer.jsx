import React, { useState } from "react";

const Answer = ({index,answer,changeTest}) =>{

    const numbers={
        0:"first",
        1:"second",
        2:"third",
        3:"fouth"
    }
    const num = numbers[index]
    const clickAnswer= () =>{
        if (answer.isTrue){
            changeTest(1)
        }else{
            changeTest(0)
        }
            
    }

    return (
        <li className="answer-item"> 
            <label for={num} class="answer">
                <input onClick={e=>clickAnswer(e.target.value)} type="radio" name="answer" id={num} value={index}/>
                <span>{answer.text}</span>           
            </label>
        </li>
    )
}

export default Answer