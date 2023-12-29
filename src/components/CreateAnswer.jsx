import React, { useState } from "react";

const CreateAnswer=({index,changeAnsList})=>{

    const numbers={
        0:"first",
        1:"second",
        2:"third",
        3:"fouth"
    }
    const num = numbers[index]
    const [value, setValue] = useState()
    const clickAnswer= (value) =>{

    }
    const changeAns=(value)=>{
        setValue(value)
        changeAnsList(index,value)
    }
    return(
        <li className="answer-item"> 
            <label for={num} class="answer">
                <input className="answer-input"
                    onClick={e=>clickAnswer(e.target.value)} 
                    onChange={e=> changeAns(e.target.value)} 
                    type="text" name="answer" id={num} value={value} 
                    placeholder="Введите ответ"/>     
            </label>
        </li>
    )
}

export default CreateAnswer